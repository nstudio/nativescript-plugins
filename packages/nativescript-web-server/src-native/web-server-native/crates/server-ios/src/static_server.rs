use std::ffi::{c_char, c_void, CStr, CString};
use web_server_native::static_server::{Callback, Server, ServerStatus, StaticServiceOptions, StatusCallback};

pub struct CServer {
    server: Server,
}

#[repr(C)]
pub enum CServerStatus {
    Inactive,
    Active,
    Crashed,
    Starting,
    Stopping,
}

impl Into<CServerStatus> for ServerStatus {
    fn into(self) -> CServerStatus {
        match self {
            ServerStatus::Inactive => CServerStatus::Inactive,
            ServerStatus::Active => CServerStatus::Active,
            ServerStatus::Crashed => CServerStatus::Crashed,
            ServerStatus::Starting => CServerStatus::Starting,
            ServerStatus::Stopping => CServerStatus::Stopping,
        }
    }
}
#[repr(C)]
pub struct CStaticServiceOptions {
    logger: bool,
    path: *const c_char,
    directory: *const c_char,
    index: *const c_char,
    host_name: *const c_char,
    port: i16,
    workers: u32,
    show_files: bool,
}

impl From<CStaticServiceOptions> for StaticServiceOptions {
    fn from(value: CStaticServiceOptions) -> Self {
        let path = unsafe { CStr::from_ptr(value.path) }.to_string_lossy();
        let directory = unsafe { CStr::from_ptr(value.directory) }.to_string_lossy();
        let index = if value.index.is_null() {
            None
        } else {
            unsafe { Some(CStr::from_ptr(value.index).to_string_lossy().to_string()) }
        };

        let host_name = if value.host_name.is_null() {
            None
        } else {
            unsafe { Some(CStr::from_ptr(value.host_name).to_string_lossy().to_string()) }
        };

        let port: Option<u16> = value.port.try_into().ok();

        Self {
            logger: value.logger,
            path: path.to_string(),
            directory: directory.to_string(),
            index,
            host_name,
            port,
            workers: value.workers,
            show_files: value.show_files,
        }
    }
}

impl From<&CStaticServiceOptions> for StaticServiceOptions {
    fn from(value: &CStaticServiceOptions) -> Self {
        let path = unsafe { CStr::from_ptr(value.path) }.to_string_lossy();
        let directory = unsafe { CStr::from_ptr(value.directory) }.to_string_lossy();
        let index = if value.index.is_null() {
            None
        } else {
            unsafe { Some(CStr::from_ptr(value.index).to_string_lossy().to_string()) }
        };

        let host_name = if value.host_name.is_null() {
            None
        } else {
            unsafe { Some(CStr::from_ptr(value.host_name).to_string_lossy().to_string()) }
        };

        let port: Option<u16> = value.port.try_into().ok();

        Self {
            logger: value.logger,
            path: path.to_string(),
            directory: directory.to_string(),
            index,
            host_name,
            port,
            workers: value.workers,
            show_files: value.show_files,
        }
    }
}

pub struct CCallback {
    pub(crate) callback: extern "C" fn(*mut c_char, *mut c_void),
    pub(crate) data: *mut c_void,
}

unsafe impl Send for CCallback {}

impl Callback for CCallback {
    fn on_success(&self) {
        (self.callback)(std::ptr::null_mut(), self.data);
    }

    fn on_error(&self, error: String) {
        (self.callback)(CString::new(error).unwrap().into_raw(), self.data);
    }
}


#[derive(Debug)]
pub struct CStatusCallback {
    pub(crate) callback: extern "C" fn(CServerStatus, *mut c_void),
    pub(crate) data: *mut c_void,
}

unsafe impl Send for CStatusCallback {}

unsafe impl Sync for CStatusCallback {}

impl StatusCallback for CStatusCallback {
    fn on_change(&self, status: ServerStatus) {
        (self.callback)(status.into(), self.data);
    }
}


#[no_mangle]
pub extern "C" fn webserver_init(options: *const CStaticServiceOptions) -> *mut CServer {
    let service_options = unsafe { &*options };
    Box::into_raw(
        Box::new(CServer { server: Server::new(service_options.into()) })
    )
}

#[no_mangle]
pub extern "C" fn webserver_release(server: *mut CServer) {
    if !server.is_null() {
        let _ = unsafe { Box::from_raw(server) };
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_start(server: *mut CServer, data: *mut c_void, callback: extern "C" fn(*mut c_char, *mut c_void)) {
    let server = &*server;
    server.server.start(Box::new(CCallback {
        callback,
        data,
    }));
}

#[no_mangle]
pub unsafe extern "C" fn webserver_stop(server: *mut CServer, wait: bool, data: *mut c_void, callback: extern "C" fn(*mut c_char, *mut c_void)) {
    let server = &*server;
    server.server.stop(wait, Box::new(CCallback { callback, data }));
}

#[no_mangle]
pub unsafe extern "C" fn webserver_status(server: *mut CServer) -> CServerStatus {
    let server = &*server;
    server.server.status().into()
}

#[no_mangle]
pub unsafe extern "C" fn webserver_error_release(error: *mut c_char) {
    if !error.is_null() {
        let _ = CString::from_raw(error);
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_set_status_callback(server: *mut CServer, data: *mut c_void, callback: extern "C" fn(CServerStatus, *mut c_void)) {
    let server = &*server;
    server.server.set_status_callback(Box::new(CStatusCallback { callback, data }));
}

#[no_mangle]
pub unsafe extern "C" fn webserver_clear_status_callback(server: *mut CServer) {
    let server = &*server;
    server.server.clear_status_callback();
}
