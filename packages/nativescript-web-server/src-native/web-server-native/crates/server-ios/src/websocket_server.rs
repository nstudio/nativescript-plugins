use crate::static_server::{CCallback, CServerStatus, CStatusCallback};
use std::ffi::{c_char, c_void, CStr, CString};
use std::slice;
use web_server_native::static_server::ServerStatus;
use web_server_native::websocket_server::{Client, Message, Reason, Server, WebSocketConnectCallback, WebSocketDisconnectCallback, WebSocketErrorCallback, WebSocketMessageCallback, WebSocketServiceOptions};

pub struct CWebsocketServer {
    server: Server,
}

#[repr(C)]
pub enum CWebsocketServerStatus {
    Inactive,
    Active,
    Crashed,
    Starting,
    Stopping,
}

impl Into<CWebsocketServerStatus> for ServerStatus {
    fn into(self) -> CWebsocketServerStatus {
        match self {
            ServerStatus::Inactive => CWebsocketServerStatus::Inactive,
            ServerStatus::Active => CWebsocketServerStatus::Active,
            ServerStatus::Crashed => CWebsocketServerStatus::Crashed,
            ServerStatus::Starting => CWebsocketServerStatus::Starting,
            ServerStatus::Stopping => CWebsocketServerStatus::Stopping,
        }
    }
}
#[repr(C)]
pub struct CWebSocketServiceOptions {
    logger: bool,
    path: *const c_char,
    max_payload: isize,
    host_name: *const c_char,
    port: i16,
    workers: u32,
    auto_pong: bool,
}

impl From<CWebSocketServiceOptions> for WebSocketServiceOptions {
    fn from(value: CWebSocketServiceOptions) -> Self {
        let path = unsafe { CStr::from_ptr(value.path) }.to_string_lossy();

        let host_name = if value.host_name.is_null() {
            None
        } else {
            unsafe { Some(CStr::from_ptr(value.host_name).to_string_lossy().to_string()) }
        };

        let port: Option<u16> = value.port.try_into().ok();

        Self {
            logger: value.logger,
            path: path.to_string(),
            host_name,
            port,
            workers: value.workers,
            auto_pong: value.auto_pong,
            max_payload: value.max_payload.try_into().ok(),
        }
    }
}

impl From<&CWebSocketServiceOptions> for WebSocketServiceOptions {
    fn from(value: &CWebSocketServiceOptions) -> Self {
        let path = unsafe { CStr::from_ptr(value.path) }.to_string_lossy();

        let host_name = if value.host_name.is_null() {
            None
        } else {
            unsafe { Some(CStr::from_ptr(value.host_name).to_string_lossy().to_string()) }
        };

        let port: Option<u16> = value.port.try_into().ok();

        Self {
            logger: value.logger,
            path: path.to_string(),
            host_name,
            port,
            workers: value.workers,
            auto_pong: value.auto_pong,
            max_payload: value.max_payload.try_into().ok(),
        }
    }
}

struct ConnectCallback {
    pub(crate) callback: extern "C" fn(u64, *mut c_void),
    pub(crate) data: *mut c_void,
}

unsafe impl Send for ConnectCallback {}
impl WebSocketConnectCallback for ConnectCallback {
    fn on_connect(&self, client_id: u64) {
        (self.callback)(client_id, self.data);
    }
}

pub struct CWebsocketMessage(Message);

struct MessageCallback {
    pub(crate) callback: extern "C" fn(u64, *mut CWebsocketMessage, *mut c_void),
    pub(crate) data: *mut c_void,
}

unsafe impl Send for MessageCallback {}
impl WebSocketMessageCallback for MessageCallback {
    fn on_message(&self, client_id: u64, message: Message) {
        (self.callback)(client_id, Box::into_raw(Box::new(CWebsocketMessage(message))), self.data);
    }
}

pub struct CWebsocketReason(Reason);

struct DisconnectCallback {
    pub(crate) callback: extern "C" fn(u64, *mut CWebsocketReason, *mut c_void),
    pub(crate) data: *mut c_void,
}

unsafe impl Send for DisconnectCallback {}
impl WebSocketDisconnectCallback for DisconnectCallback {
    fn on_disconnect(&self, client_id: u64, reason: Reason) {
        (self.callback)(client_id, Box::into_raw(Box::new(CWebsocketReason(reason))), self.data);
    }
}


struct ErrorCallback {
    pub(crate) callback: extern "C" fn(u64, *mut c_char, *mut c_void),
    pub(crate) data: *mut c_void,
}

unsafe impl Send for ErrorCallback {}
impl WebSocketErrorCallback for ErrorCallback {
    fn on_error(&self, client_id: u64, error: String) {
        (self.callback)(client_id, CString::new(error).unwrap().into_raw(), self.data);
    }
}

pub struct CClient(Client);

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_client(server: *mut CWebsocketServer, client_id: u64) -> *mut CClient {
    if server.is_null() {
        return std::ptr::null_mut();
    }
    let server = &*server;
    match server.server.client(client_id) {
        None => std::ptr::null_mut(),
        Some(client) => {
            Box::into_raw(Box::new(CClient(client)))
        }
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_client_id(client: *mut CClient) -> u64 {
    if client.is_null() {
        return 0;
    }
    let client = &*client;
    client.0.id()
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_client_release(client: *mut CClient) {
    if !client.is_null() {
        let _ = Box::from_raw(client);
    }
}

#[repr(C)]
pub enum WebsocketMessageType {
    Text,
    Binary,
    Ping,
    Pong,
}

#[no_mangle]
pub extern "C" fn webserver_websocket_init(options: *const CWebSocketServiceOptions) -> *mut CWebsocketServer {
    let service_options = unsafe { &*options };
    Box::into_raw(
        Box::new(CWebsocketServer { server: Server::new(service_options.into()) })
    )
}

#[no_mangle]
pub extern "C" fn webserver_websocket_release(server: *mut CWebsocketServer) {
    if !server.is_null() {
        let _ = unsafe { Box::from_raw(server) };
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_start(server: *mut CWebsocketServer, data: *mut c_void, callback: extern "C" fn(*mut c_char, *mut c_void)) {
    let server = &*server;
    server.server.start(Box::new(CCallback {
        callback,
        data,
    }));
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_stop(server: *mut CWebsocketServer, wait: bool, data: *mut c_void, callback: extern "C" fn(*mut c_char, *mut c_void)) {
    let server = &*server;
    server.server.stop(wait, Box::new(CCallback { callback, data }));
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_status(server: *mut CWebsocketServer) -> CWebsocketServerStatus {
    let server = &*server;
    server.server.status().into()
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_send_ping(server: *mut CWebsocketServer, id: u64, data: *const u8, data_size: usize) {
    let server = &*server;
    let message = if data.is_null() || data_size == 0 {
        Message::Ping(None)
    } else {
        let data = slice::from_raw_parts(data, data_size).to_vec();
        Message::new_ping(Some(data))
    };
    server.server.send(message, id);
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_broadcast_ping(server: *mut CWebsocketServer, data: *const u8, data_size: usize) {
    let server = &*server;
    let message = if data.is_null() || data_size == 0 {
        Message::Ping(None)
    } else {
        let data = slice::from_raw_parts(data, data_size).to_vec();
        Message::new_ping(Some(data))
    };
    server.server.broadcast(message);
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_send_pong(server: *mut CWebsocketServer, id: u64, data: *const u8, data_size: usize) {
    let server = &*server;
    let message = if data.is_null() || data_size == 0 {
        None
    } else {
        Some(slice::from_raw_parts(data, data_size).to_vec())
    };
    let message = Message::new_pong(message);
    server.server.send(message, id);
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_broadcast_pong(server: *mut CWebsocketServer, data: *const u8, data_size: usize) {
    let server = &*server;
    let message = if data.is_null() || data_size == 0 {
        None
    } else {
        Some(slice::from_raw_parts(data, data_size).to_vec())
    };
    let message = Message::new_pong(message);
    server.server.broadcast(message);
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_broadcast_text(server: *mut CWebsocketServer, message: *const c_char) {
    let server = &*server;
    if message.is_null() {
        return;
    }
    let message = CStr::from_ptr(message);
    let message = message.to_string_lossy();
    let message = Message::Text(message.to_string().into());
    server.server.broadcast(message);
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_send_text(server: *mut CWebsocketServer, id: u64, message: *const c_char) {
    let server = &*server;
    if message.is_null() {
        return;
    }
    let message = CStr::from_ptr(message);
    let message = message.to_string_lossy();
    let message = Message::Text(message.to_string().into());
    server.server.send(message, id);
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_send_binary(server: *mut CWebsocketServer, id: u64, data: *const u8, data_size: usize) {
    let server = &*server;
    let message = if data.is_null() || data_size == 0 {
        Message::empty_binary()
    } else {
        let data = slice::from_raw_parts(data, data_size).to_vec();
        Message::new_binary(data)
    };
    server.server.send(message, id);
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_broadcast_binary(server: *mut CWebsocketServer, data: *const u8, data_size: usize) {
    let server = &*server;
    let message = if data.is_null() || data_size == 0 {
        Message::empty_binary()
    } else {
        let data = slice::from_raw_parts(data, data_size).to_vec();
        Message::new_binary(data)
    };
    server.server.broadcast(message);
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_set_status_callback(server: *mut CWebsocketServer, data: *mut c_void, callback: extern "C" fn(CServerStatus, *mut c_void)) {
    let server = &*server;
    server.server.set_status_callback(Box::new(CStatusCallback { callback, data }));
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_clear_status_callback(server: *mut CWebsocketServer) {
    let server = &*server;
    server.server.clear_status_callback();
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_message_release(message: *mut CWebsocketMessage) {
    if !message.is_null() {
        let _ = unsafe { Box::from_raw(message) };
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_message_type(message: *mut CWebsocketMessage) -> WebsocketMessageType {
    assert!(!message.is_null());
    let message = &*message;
    match &message.0 {
        Message::Text(_) => WebsocketMessageType::Text,
        Message::Binary(_) => WebsocketMessageType::Binary,
        Message::Pong(_) => WebsocketMessageType::Pong,
        Message::Ping(_) => WebsocketMessageType::Ping,
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_message_data(message: *mut CWebsocketMessage) -> *const u8 {
    assert!(!message.is_null());
    let message = &*message;
    match &message.0 {
        Message::Text(_) => std::ptr::null(),
        Message::Binary(binary) => binary.as_ptr(),
        Message::Pong(pong) => pong.as_ref().map(|value| value.as_ptr()).unwrap_or(std::ptr::null()),
        Message::Ping(ping) => ping.as_ref().map(|value| value.as_ptr()).unwrap_or(std::ptr::null()),
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_message_data_size(message: *mut CWebsocketMessage) -> usize {
    assert!(!message.is_null());
    let message = &*message;
    match &message.0 {
        Message::Text(_) => 0,
        Message::Binary(binary) => binary.len(),
        Message::Pong(pong) => pong.as_ref().map(|value| value.len()).unwrap_or(0),
        Message::Ping(ping) => ping.as_ref().map(|value| value.len()).unwrap_or(0),
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_message_create_text(text: *const c_char) -> *mut CWebsocketMessage {
    if text.is_null() {
        return Box::into_raw(Box::new(CWebsocketMessage(Message::Text("".into()))));
    }

    let text = unsafe { CStr::from_ptr(text) }.to_string_lossy();
    let text = text.to_string();
    Box::into_raw(Box::new(CWebsocketMessage(Message::Text(text.into()))))
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_message_create_ping(data: *const u8, data_size: usize) -> *mut CWebsocketMessage {
    if data.is_null() || data_size == 0 {
        return Box::into_raw(Box::new(CWebsocketMessage(Message::Ping(None))));
    }

    let data = std::slice::from_raw_parts(data, data_size);
    Box::into_raw(Box::new(CWebsocketMessage(Message::Ping(Some(data.into())))))
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_message_create_pong(data: *const u8, data_size: usize) -> *mut CWebsocketMessage {
    if data.is_null() || data_size == 0 {
        return Box::into_raw(Box::new(CWebsocketMessage(Message::Pong(None))));
    }

    let data = std::slice::from_raw_parts(data, data_size);
    Box::into_raw(Box::new(CWebsocketMessage(Message::Pong(Some(data.into())))))
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_message_create_binary(data: *const u8, data_size: usize) -> *mut CWebsocketMessage {
    if data.is_null() || data_size == 0 {
        return Box::into_raw(Box::new(CWebsocketMessage(Message::empty_binary())));
    }

    let data = slice::from_raw_parts(data, data_size);
    Box::into_raw(Box::new(CWebsocketMessage(Message::Binary(data.into()))))
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_message_text(message: *const CWebsocketMessage) -> *mut c_char {
    if message.is_null() {
        return std::ptr::null_mut();
    }

    let message = &*message;
    if let Message::Text(text) = &message.0 {
        return CString::new(text.to_string()).unwrap().into_raw();
    }
    std::ptr::null_mut()
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_reason_code(reason: *const CWebsocketReason) -> u16 {
    if reason.is_null() {
        return 1000;
    }

    let reason = &*reason;
    match &reason.0 {
        Reason::None => 1000,
        Reason::Some(reason) => {
            reason.code.into()
        }
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_reason_description(reason: *const CWebsocketReason) -> *mut c_char {
    if reason.is_null() {
        return std::ptr::null_mut();
    }
    let reason = &*reason;
    match &reason.0 {
        Reason::None => std::ptr::null_mut(),
        Reason::Some(reason) => {
            match reason.description.as_deref() {
                None => std::ptr::null_mut(),
                Some(description) => {
                    match CString::new(description.to_owned()) {
                        Ok(description) => description.into_raw(),
                        Err(_) => std::ptr::null_mut(),
                    }
                }
            }
        }
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_reason_release(reason: *mut CWebsocketReason) {
    if !reason.is_null() {
        let _ = unsafe { Box::from_raw(reason) };
    }
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_add_connect_callback(server: *mut CWebsocketServer, data: *mut c_void, callback: extern "C" fn(u64, *mut c_void)) -> u64 {
    let server = &*server;
    server.server.add_on_connect(Box::new(ConnectCallback { callback, data }))
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_remove_connect_callback(server: *mut CWebsocketServer, id: u64) {
    let server = &*server;
    server.server.remove_on_connect(id)
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_add_disconnect_callback(server: *mut CWebsocketServer, data: *mut c_void, callback: extern "C" fn(u64, *mut CWebsocketReason, *mut c_void)) -> u64 {
    let server = &*server;
    server.server.add_on_disconnect(Box::new(DisconnectCallback { callback, data }))
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_remove_disconnect_callback(server: *mut CWebsocketServer, id: u64) {
    let server = &*server;
    server.server.remove_on_connect(id)
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_add_message_callback(server: *mut CWebsocketServer, data: *mut c_void, callback: extern "C" fn(u64, *mut CWebsocketMessage, *mut c_void)) -> u64 {
    let server = &*server;
    server.server.add_on_message(Box::new(MessageCallback { callback, data }))
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_remove_message_callback(server: *mut CWebsocketServer, id: u64) {
    let server = &*server;
    server.server.remove_on_message(id)
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_add_error_callback(server: *mut CWebsocketServer, data: *mut c_void, callback: extern "C" fn(u64, *mut c_char, *mut c_void)) -> u64 {
    let server = &*server;
    server.server.add_on_error(Box::new(ErrorCallback { callback, data }))
}

#[no_mangle]
pub unsafe extern "C" fn webserver_websocket_remove_error_callback(server: *mut CWebsocketServer, id: u64) {
    let server = &*server;
    server.server.remove_on_error(id)
}
