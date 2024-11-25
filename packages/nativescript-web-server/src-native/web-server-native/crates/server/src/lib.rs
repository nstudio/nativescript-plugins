pub mod static_server;
pub mod websocket_server;

use actix_web::rt::Runtime;
use actix_web::web::Bytes;
use parking_lot::lock_api::MappedRwLockReadGuard;
use parking_lot::{RawRwLock, RwLock, RwLockReadGuard};
use std::collections::HashMap;
use std::sync::atomic::AtomicUsize;
use std::sync::{Arc, LazyLock};

pub trait Callback {
    fn call(&self);
}

pub struct CallbackImpl {
    cb: fn(),
}

impl Callback for CallbackImpl {
    fn call(&self) {
        (self.cb)()
    }
}

unsafe impl Send for CallbackImpl {}
unsafe impl Sync for CallbackImpl {}


#[derive(Clone)]
struct OnStart {
    id: Arc<AtomicUsize>,
    callbacks: Arc<RwLock<HashMap<usize, Box<dyn Callback>>>>,
}

impl Default for OnStart {
    fn default() -> Self {
        Self {
            id: Arc::new(AtomicUsize::new(0)),
            callbacks: Default::default(),
        }
    }
}

impl OnStart {
    fn add(&self, cb: Box<dyn Callback>) -> usize {
        let id = self.id.fetch_add(1, std::sync::atomic::Ordering::SeqCst);
        self.callbacks.write().insert(id, cb);
        id
    }

    fn remove(&self, id: usize) {
        self.callbacks.write().remove(&id);
    }
}

unsafe impl Send for OnStart {}
unsafe impl Sync for OnStart {}

#[derive(Clone)]
struct OnStop {
    id: Arc<AtomicUsize>,
    callbacks: Arc<RwLock<HashMap<usize, Box<dyn Callback>>>>,
}

impl Default for OnStop {
    fn default() -> Self {
        Self {
            id: Arc::new(AtomicUsize::new(0)),
            callbacks: Default::default(),
        }
    }
}

impl OnStop {
    fn add(&self, cb: Box<dyn Callback>) -> usize {
        let id = self.id.fetch_add(1, std::sync::atomic::Ordering::SeqCst);
        self.callbacks.write().insert(id, cb);
        id
    }

    fn remove(&self, id: usize) {
        self.callbacks.write().remove(&id);
    }
}


unsafe impl Send for OnStop {}
unsafe impl Sync for OnStop {}


static ON_START: LazyLock<OnStart> = LazyLock::new(|| Default::default());
static ON_STOP: LazyLock<OnStop> = LazyLock::new(|| Default::default());

pub fn add_on_start(callback: fn()) -> usize {
    let cb = CallbackImpl { cb: callback };
    let cb = Box::new(cb);
    ON_START.add(cb)
}

pub fn remove_on_start(id: usize) {
    ON_START.remove(id);
}


pub fn add_on_stop(callback: fn()) -> usize {
    let cb = CallbackImpl { cb: callback };
    let cb = Box::new(cb);
    ON_STOP.add(cb)
}

pub fn remove_on_stop(id: usize) {
    ON_STOP.remove(id);
}


struct RT {
    runtime: Arc<RwLock<Runtime>>,
}

impl Default for RT {
    fn default() -> Self {
        let rt = tokio::runtime::Builder::new_multi_thread()
            .on_thread_start(|| {
                let lock = ON_START.callbacks.read();
                for (_, f) in lock.iter() {
                    f.call();
                }
            })
            .on_thread_stop(|| {
                let lock = ON_STOP.callbacks.read();
                for (_, f) in lock.iter() {
                    f.call();
                }
            })
            .enable_io()
            .enable_time()
            .build()
            .unwrap();

        let runtime = Arc::new(RwLock::new(Runtime::from(rt)));

        Self { runtime }
    }
}

unsafe impl Sync for RT {}
unsafe impl Send for RT {}

static RUNTIME: LazyLock<RT> = LazyLock::new(|| RT::default());

pub fn runtime<'a>() -> MappedRwLockReadGuard<'a, RawRwLock, Runtime> {
    RwLockReadGuard::map(RUNTIME.runtime.read(), |rt| rt)
}
pub fn tokio_runtime<'a>() -> MappedRwLockReadGuard<'a, RawRwLock, tokio::runtime::Runtime> {
    RwLockReadGuard::map(RUNTIME.runtime.read(), |rt| rt.tokio_runtime())
}

pub fn release_bytes(bytes: i64) {
    if bytes == 0 {
        return;
    }

    let bytes = bytes as *mut Bytes;
    if bytes.is_null() {
        return;
    }

    let _ = unsafe { Box::from_raw(bytes) };
}