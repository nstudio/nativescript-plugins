use jni::objects::{GlobalRef, JClass, JStaticMethodID, JValue};
use jni::signature::{Primitive, ReturnType};
use jni::sys::{jint, jlong};
use jni::{JNIEnv, JavaVM};
use parking_lot::RwLock;
use std::collections::HashMap;
use std::os::raw::c_void;
use std::sync::OnceLock;
use web_server_native::release_bytes;


pub mod static_server;
pub mod websocket_server;

pub(crate) const GC_CLASS: &str = "io/nstudio/plugins/webserver/GC";
pub(crate) const GC_STATIC_WATCH_OBJECT_METHOD: &str = "io_nstudio_plugins_webserver_GC_watchObject";

pub(crate) const JAVA_VOID_TYPE: ReturnType = ReturnType::Primitive(Primitive::Void);

pub static JVM: OnceLock<JavaVM> = OnceLock::new();


#[derive(Clone)]
pub struct StaticMethodCacheItem {
    clazz: GlobalRef,
    id: JStaticMethodID,
}

impl StaticMethodCacheItem {
    pub fn new(clazz: GlobalRef, id: JStaticMethodID) -> Self {
        Self {
            clazz,
            id,
        }
    }

    pub fn clazz(&self) -> JClass {
        unsafe { JClass::from_raw(self.clazz.as_raw()) }
    }
}

pub static JVM_STATIC_METHOD_CACHE: OnceLock<RwLock<HashMap<&'static str, StaticMethodCacheItem>>> =
    OnceLock::new();

pub static JVM_CLASS_CACHE: OnceLock<RwLock<HashMap<&'static str, GlobalRef>>> =
    OnceLock::new();

pub fn find_static_method_id(name: &str) -> Option<StaticMethodCacheItem> {
    JVM_STATIC_METHOD_CACHE.get().map_or(None, |c| {
        c.read()
            .get(name)
            .map(|c| c.clone())
    })
}

#[no_mangle]
pub extern "system" fn JNI_OnLoad(vm: JavaVM, _reserved: *const c_void) -> jint {
    if let Ok(mut env) = vm.get_env() {
        let gc_clazz = env.find_class(GC_CLASS).unwrap();

        let gc_clazz = env.new_global_ref(gc_clazz).unwrap();

        let watch_item_method = env.get_static_method_id(
            GC_CLASS, "watchObject", "(JLjava/nio/ByteBuffer;)V",
        ).unwrap();


        let watch_item_method = StaticMethodCacheItem::new(gc_clazz.clone(), watch_item_method);


        JVM_CLASS_CACHE.get_or_init(|| {
            let mut map = HashMap::new();
            map.insert(GC_CLASS, gc_clazz);
            RwLock::new(map)
        });


        JVM_STATIC_METHOD_CACHE.get_or_init(|| {
            let mut map = HashMap::new();
            map.insert(GC_STATIC_WATCH_OBJECT_METHOD, watch_item_method);
            RwLock::new(map)
        });

        JVM.get_or_init(|| vm);


        web_server_native::add_on_start(|| {
            if let Some(jvm) = JVM.get() {
                let _ = jvm.attach_current_thread();
            }
        });
    }
    jni::sys::JNI_VERSION_1_6
}
pub unsafe fn watch_item(env: &mut JNIEnv, id: jlong, buffer: JValue) {
    let method_id = find_static_method_id(GC_STATIC_WATCH_OBJECT_METHOD).unwrap();
    env.call_static_method_unchecked(
        method_id.clazz(), method_id.id, JAVA_VOID_TYPE, &[JValue::Long(id).as_jni(), buffer.as_jni()],
    ).unwrap();
}


#[no_mangle]
pub extern "system" fn Java_io_nstudio_plugins_webserver_GC_disposeByteBufMut(
    _env: JNIEnv,
    _: JClass,
    buf: jlong,
) {
    if buf != 0 {
        release_bytes(buf);
    }
}