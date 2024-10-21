use jni::objects::{GlobalRef, JClass, JObject, JString, JValue, JValueGen};
use jni::sys::{jboolean, jint, jlong, jshort, JNI_TRUE};
use jni::JNIEnv;
use std::fmt::Debug;
use web_server_native::{Callback, Server, ServerStatus, StaticServiceOptions, StatusCallback};

#[no_mangle]
pub extern "system" fn Java_io_nstudio_plugins_webserver_Server_init(
    mut env: JNIEnv,
    _: JClass,
    logger: jboolean,
    path: JString,
    directory: JString,
    index: JString,
    host_name: JString,
    port: jshort,
    workers: jint,
    show_files: jboolean,
) -> jlong {
    let path = env.get_string(&path).unwrap().to_string_lossy().to_string();
    let directory = env.get_string(&directory).unwrap().to_string_lossy().to_string();
    let index = if index.is_null() {
        None
    } else {
        Some(env.get_string(&index).unwrap().to_string_lossy().to_string())
    };


    let host_name = if host_name.is_null() {
        None
    } else {
        Some(env.get_string(&host_name).unwrap().to_string_lossy().to_string())
    };

    let port: Option<u16> = port.try_into().ok();

    let workers: u32 = workers.try_into().unwrap_or(2);


    let options = StaticServiceOptions {
        logger: logger == JNI_TRUE,
        path,
        directory,
        index,
        host_name,
        port,
        workers,
        show_files: show_files == JNI_TRUE,
    };

    Box::into_raw(
        Box::new(
            Server::new(
                options
            )
        )
    ) as jlong
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_Server_release(
    _: JNIEnv,
    _: JClass,
    server: jlong,
) {
    if server != 0 {
        let _ = Box::from_raw(server as *mut Server);
    }
}


#[derive(Debug)]
struct JavaCallback {
    callback: GlobalRef,
    jvm: jni::JavaVM,
}

unsafe impl Send for JavaCallback {}

unsafe impl Sync for JavaCallback {}

impl Callback for JavaCallback {
    fn on_success(&self) {
        let vm = self.jvm.attach_current_thread();
        let mut env = vm.unwrap();
        let _ = env.call_method(self.callback.as_obj(), "onSuccess", "()V", &[]);
    }

    fn on_error(&self, error: String) {
        let vm = self.jvm.attach_current_thread();
        let mut env = vm.unwrap();
        let e = env.new_string(error).unwrap();
        let _ = env.call_method(self.callback.as_obj(), "onError", "(Ljava/lang/String;)V", &[
            (&e).into()
        ]);
    }
}

impl StatusCallback for JavaCallback {
    fn on_change(&self, status: ServerStatus) {
        let vm = self.jvm.attach_current_thread();
        let mut env = vm.unwrap();
        let _ = env.call_method(self.callback.as_obj(), "onChange", "(I)V", &[
            JValueGen::Int(status as i32)
        ]);
    }
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_Server_start(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    callback: JObject,
) {
    let jvm = env.get_java_vm().unwrap();
    let cb = JavaCallback {
        jvm,
        callback: env.new_global_ref(callback).unwrap(),
    };

    let server = &*(server as *mut Server);

    server.start(Box::new(cb));
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_Server_stop(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    wait: jboolean,
    callback: JObject,
) {
    let jvm = env.get_java_vm().unwrap();
    let cb = JavaCallback {
        jvm,
        callback: env.new_global_ref(callback).unwrap(),
    };

    let server = &*(server as *mut Server);

    server.stop(wait == JNI_TRUE, Box::new(cb));
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_Server_setStatusCallback(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    callback: JObject,
) {
    let jvm = env.get_java_vm().unwrap();
    let cb = JavaCallback {
        jvm,
        callback: env.new_global_ref(callback).unwrap(),
    };

    let server = &*(server as *mut Server);

    server.set_status_callback(Box::new(cb));
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_Server_clearStatusCallback(
    _: JNIEnv,
    _: JClass,
    server: jlong,
) {
    let server = &*(server as *mut Server);

    server.clear_status_callback();
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_Server_status(
    _: JNIEnv,
    _: JClass,
    server: jlong,
) -> jint {
    if server == 0 {
        return 0;
    };

    let server = &*(server as *mut Server);

    server.status() as jint
}
