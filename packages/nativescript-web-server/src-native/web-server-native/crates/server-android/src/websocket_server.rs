use crate::static_server::JavaCallback;
use jni::objects::{JByteArray, JByteBuffer, JClass, JObject, JString, ReleaseMode};
use jni::sys::{jboolean, jint, jlong, jshort, JNI_TRUE};
use jni::JNIEnv;
use std::fmt::Debug;
use std::slice;
use web_server_native::websocket_server::{Message, Server, WebSocketServiceOptions};

#[no_mangle]
pub extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_init(
    mut env: JNIEnv,
    _: JClass,
    logger: jboolean,
    path: JString,
    max_payload: jint,
    host_name: JString,
    port: jshort,
    workers: jint,
    auto_pong: jboolean,
) -> jlong {
    let path = env.get_string(&path).unwrap().to_string_lossy().to_string();


    let host_name = if host_name.is_null() {
        None
    } else {
        Some(env.get_string(&host_name).unwrap().to_string_lossy().to_string())
    };

    let port: Option<u16> = port.try_into().ok();

    let workers: u32 = workers.try_into().unwrap_or(2);


    let options = WebSocketServiceOptions {
        logger: logger == JNI_TRUE,
        path,
        host_name,
        port,
        workers,
        auto_pong: auto_pong == JNI_TRUE,
        max_payload: max_payload.try_into().ok(),
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
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_release(
    _: JNIEnv,
    _: JClass,
    server: jlong,
) {
    if server != 0 {
        let _ = Box::from_raw(server as *mut Server);
    }
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_start(
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
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_stop(
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
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_setStatusCallback(
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
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_clearStatusCallback(
    _: JNIEnv,
    _: JClass,
    server: jlong,
) {
    let server = &*(server as *mut Server);

    server.clear_status_callback();
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_status(
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

unsafe fn buffer_to_vec(env: &mut JNIEnv,
                        data: &JByteBuffer) -> Option<Vec<u8>> {
    if let (Ok(addr), Ok(size)) = (env.get_direct_buffer_address(data), env.get_direct_buffer_capacity(data)) {
        let message = slice::from_raw_parts_mut(addr, size).to_vec();
        return Some(message);
    }
    None
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_send_ping_bytes(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
    data: &JByteArray,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);

    let message = if data.is_null() {
        None
    } else {
        unsafe {
            match env.get_array_elements_critical(data, ReleaseMode::NoCopyBack) {
                Ok(array) => {
                    Some(slice::from_raw_parts_mut(array.as_ptr() as *mut u8, array.len()).to_vec())
                }
                Err(_) => {
                    let length = env.get_array_length(data).unwrap_or_default();
                    let mut buffer: Vec<u8> = Vec::with_capacity(length as usize);
                    let slice = slice::from_raw_parts_mut(buffer.as_mut_ptr() as *mut i8, buffer.len());
                    let _ = env.get_byte_array_region(data, 0, slice);
                    Some(buffer)
                }
            }
        }
    };
    let message = Message::Ping(message.into());
    server.send(message, id as u64);
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_broadcast_ping_bytes(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    data: &JByteArray,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);

    let message = if data.is_null() {
        None
    } else {
        unsafe {
            match env.get_array_elements_critical(data, ReleaseMode::NoCopyBack) {
                Ok(array) => {
                    Some(slice::from_raw_parts_mut(array.as_ptr() as *mut u8, array.len()).to_vec())
                }
                Err(_) => {
                    let length = env.get_array_length(data).unwrap_or_default();
                    let mut buffer: Vec<u8> = Vec::with_capacity(length as usize);
                    let slice = slice::from_raw_parts_mut(buffer.as_mut_ptr() as *mut i8, buffer.len());
                    let _ = env.get_byte_array_region(data, 0, slice);
                    Some(buffer)
                }
            }
        }
    };
    let message = Message::Ping(message.into());
    server.broadcast(message);
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_send_ping_buffer(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
    data: &JByteBuffer,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);
    if let Some(message) = buffer_to_vec(&mut env, data) {
        let message = Message::Ping(message.into());
        server.send(message, id as u64);
    }
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_broadcast_ping_buffer(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    data: &JByteBuffer,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);
    if let Some(message) = buffer_to_vec(&mut env, data) {
        let message = Message::Ping(message.into());
        server.broadcast(message);
    }
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_send_pong_bytes(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
    data: &JByteArray,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);

    let message = if data.is_null() {
        None
    } else {
        unsafe {
            match env.get_array_elements_critical(data, ReleaseMode::NoCopyBack) {
                Ok(array) => {
                    Some(slice::from_raw_parts_mut(array.as_ptr() as *mut u8, array.len()).to_vec())
                }
                Err(_) => {
                    let length = env.get_array_length(data).unwrap_or_default();
                    let mut buffer: Vec<u8> = Vec::with_capacity(length as usize);
                    let slice = slice::from_raw_parts_mut(buffer.as_mut_ptr() as *mut i8, buffer.len());
                    let _ = env.get_byte_array_region(data, 0, slice);
                    Some(buffer)
                }
            }
        }
    };
    let message = Message::Pong(message.into());
    server.send(message, id as u64);
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_broadcast_pong_bytes(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    data: &JByteArray,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);

    let message = if data.is_null() {
        None
    } else {
        unsafe {
            match env.get_array_elements_critical(data, ReleaseMode::NoCopyBack) {
                Ok(array) => {
                    Some(slice::from_raw_parts_mut(array.as_ptr() as *mut u8, array.len()).to_vec())
                }
                Err(_) => {
                    let length = env.get_array_length(data).unwrap_or_default();
                    let mut buffer: Vec<u8> = Vec::with_capacity(length as usize);
                    let slice = slice::from_raw_parts_mut(buffer.as_mut_ptr() as *mut i8, buffer.len());
                    let _ = env.get_byte_array_region(data, 0, slice);
                    Some(buffer)
                }
            }
        }
    };
    let message = Message::Pong(message.into());
    server.broadcast(message);
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_send_pong_buffer(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
    data: &JByteBuffer,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);
    if let Some(message) = buffer_to_vec(&mut env, data) {
        let message = Message::Pong(message.into());
        server.send(message, id as u64);
    }
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_broadcast_pong_buffer(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    data: &JByteBuffer,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);
    if let Some(message) = buffer_to_vec(&mut env, data) {
        let message = Message::Pong(message.into());
        server.broadcast(message);
    }
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_send_text(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
    text: JString,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);

    let message = if text.is_null() {
        "".to_string()
    } else {
        if let Ok(text) = env.get_string(&text) {
            text.to_string_lossy().to_string()
        } else {
            "".to_string()
        }
    };
    let message = Message::Text(message.into());
    server.send(message, id as u64);
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_broadcast_text(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    text: JString,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);

    let message = if text.is_null() {
        "".to_string()
    } else {
        if let Ok(text) = env.get_string(&text) {
            text.to_string_lossy().to_string()
        } else {
            "".to_string()
        }
    };
    let message = Message::Text(message.into());
    server.broadcast(message);
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_send_binary_bytes(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
    data: &JByteArray,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);

    let message = if data.is_null() {
        None
    } else {
        unsafe {
            match env.get_array_elements_critical(data, ReleaseMode::NoCopyBack) {
                Ok(array) => {
                    Some(slice::from_raw_parts_mut(array.as_ptr() as *mut u8, array.len()).to_vec())
                }
                Err(_) => {
                    let length = env.get_array_length(data).unwrap_or_default();
                    let mut buffer: Vec<u8> = Vec::with_capacity(length as usize);
                    let slice = slice::from_raw_parts_mut(buffer.as_mut_ptr() as *mut i8, buffer.len());
                    let _ = env.get_byte_array_region(data, 0, slice);
                    Some(buffer)
                }
            }
        }
    };
    let message = Message::Binary(message.into());
    server.send(message, id as u64);
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_broadcast_binary_bytes(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    data: &JByteArray,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);

    let message = if data.is_null() {
        None
    } else {
        unsafe {
            match env.get_array_elements_critical(data, ReleaseMode::NoCopyBack) {
                Ok(array) => {
                    Some(slice::from_raw_parts_mut(array.as_ptr() as *mut u8, array.len()).to_vec())
                }
                Err(_) => {
                    let length = env.get_array_length(data).unwrap_or_default();
                    let mut buffer: Vec<u8> = Vec::with_capacity(length as usize);
                    let slice = slice::from_raw_parts_mut(buffer.as_mut_ptr() as *mut i8, buffer.len());
                    let _ = env.get_byte_array_region(data, 0, slice);
                    Some(buffer)
                }
            }
        }
    };
    let message = Message::Binary(message.into());
    server.broadcast(message);
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_send_binary_buffer(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
    data: &JByteBuffer,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);
    if let Some(message) = buffer_to_vec(&mut env, data) {
        let message = Message::Binary(message.into());
        server.send(message, id as u64);
    }
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_broadcast_binary_buffer(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    data: &JByteBuffer,
) {
    if server == 0 {
        return;
    };

    let server = &*(server as *mut Server);
    if let Some(message) = buffer_to_vec(&mut env, data) {
        let message = Message::Binary(message.into());
        server.broadcast(message);
    }
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_addOnConnect(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    callback: JObject,
) -> jlong {
    let jvm = env.get_java_vm().unwrap();
    let cb = JavaCallback {
        jvm,
        callback: env.new_global_ref(callback).unwrap(),
    };

    let server = &*(server as *mut Server);

    server.add_on_connect(Box::new(cb)) as jlong
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_removeOnConnect(
    _: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
) {
    if server == 0 {
        return;
    }

    let server = &*(server as *mut Server);

    server.remove_on_connect(id as u64)
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_addOnDisconnect(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    callback: JObject,
) -> jlong {
    let jvm = env.get_java_vm().unwrap();
    let cb = JavaCallback {
        jvm,
        callback: env.new_global_ref(callback).unwrap(),
    };

    let server = &*(server as *mut Server);

    server.add_on_disconnect(Box::new(cb)) as jlong
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_removeOnDisconnect(
    _: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
) {
    if server == 0 {
        return;
    }

    let server = &*(server as *mut Server);

    server.remove_on_disconnect(id as u64)
}


#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_addOnMessage(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    callback: JObject,
) -> jlong {
    let jvm = env.get_java_vm().unwrap();
    let cb = JavaCallback {
        jvm,
        callback: env.new_global_ref(callback).unwrap(),
    };

    let server = &*(server as *mut Server);

    server.add_on_message(Box::new(cb)) as jlong
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_removeOnMessage(
    _: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
) {
    if server == 0 {
        return;
    }

    let server = &*(server as *mut Server);

    server.remove_on_message(id as u64)
}



#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_addOnError(
    mut env: JNIEnv,
    _: JClass,
    server: jlong,
    callback: JObject,
) -> jlong {
    let jvm = env.get_java_vm().unwrap();
    let cb = JavaCallback {
        jvm,
        callback: env.new_global_ref(callback).unwrap(),
    };

    let server = &*(server as *mut Server);

    server.add_on_error(Box::new(cb)) as jlong
}

#[no_mangle]
pub unsafe extern "system" fn Java_io_nstudio_plugins_webserver_websocket_Server_removeOnError(
    _: JNIEnv,
    _: JClass,
    server: jlong,
    id: jlong,
) {
    if server == 0 {
        return;
    }

    let server = &*(server as *mut Server);

    server.remove_on_error(id as u64)
}