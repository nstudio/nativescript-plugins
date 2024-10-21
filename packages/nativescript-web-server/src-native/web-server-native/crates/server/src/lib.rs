use actix_web::dev::ServerHandle;
use actix_web::rt::Runtime;
use actix_web::App;
use parking_lot::{Mutex, RwLock};
use std::fmt::Debug;
use std::ops::Deref;
use std::sync::atomic::{AtomicU8, Ordering};
use std::sync::Arc;


const ACTIVE_ERROR: &str = "Server has already started";

const INACTIVE_ERROR: &str = "Server has not started";
const INTERNAL_START_ERROR: &str = "Failed to start server";


#[derive(Debug, Clone)]
pub struct StaticServiceOptions {
    pub logger: bool,
    pub path: String,
    pub directory: String,
    pub index: Option<String>,
    pub host_name: Option<String>,
    pub port: Option<u16>,
    pub workers: u32,
    pub show_files: bool,
}

#[repr(u8)]
#[derive(Debug, Eq, PartialEq, Clone, Copy)]
pub enum ServerStatus {
    Inactive,
    Active,
    Crashed,
    Starting,
    Stopping,
}

#[derive(Debug)]
pub struct Server {
    runtime: Arc<RwLock<Option<Runtime>>>,
    handle: Arc<RwLock<Option<ServerHandle>>>,
    config: Arc<Mutex<StaticServiceOptions>>,
    status: Arc<AtomicU8>,
    status_callback: Arc<RwLock<Option<Box<dyn StatusCallback>>>>,
}

impl Clone for Server {
    fn clone(&self) -> Self {
        Server {
            runtime: Arc::clone(&self.runtime),
            handle: Arc::clone(&self.handle),
            config: Arc::clone(&self.config),
            status: Arc::clone(&self.status),
            status_callback: Arc::clone(&self.status_callback),
        }
    }
}

unsafe impl Send for Server {}

unsafe impl Sync for Server {}

pub trait StatusCallback: Send + Debug + Sync {
    fn on_change(&self, status: ServerStatus);
}

pub trait Callback: Send {
    fn on_success(&self);
    fn on_error(&self, error: String);
}

impl Server {
    pub fn new(
        options: StaticServiceOptions
    ) -> Self {
        let rt = Runtime::new().unwrap();
        Self { runtime: Arc::new(RwLock::new(Some(rt))), handle: Default::default(), config: Arc::new(Mutex::new(options)), status: Default::default(), status_callback: Arc::new(RwLock::new(None)) }
    }

    pub fn start(&self, callback: Box<dyn Callback>) {
        if self.status.load(Ordering::SeqCst) == ServerStatus::Active as u8 {
            callback.on_error(ACTIVE_ERROR.to_string())
        }
        self.status.store(ServerStatus::Starting as u8, Ordering::SeqCst);
        let status_callback = self.status_callback.read();
        if let Some(callback) = status_callback.deref() {
            callback.on_change(ServerStatus::Starting);
            drop(status_callback);
        }

        let status_callback = Arc::clone(&self.status_callback);

        let rt = self.runtime.read();
        if let Some(rt) = rt.as_ref() {
            let handle = Arc::clone(&self.handle);
            let config = Arc::clone(&self.config);
            let status = Arc::clone(&self.status);
            let rt_handle = rt.tokio_runtime().handle().clone();
            rt_handle.clone().spawn_blocking(move || {
                let (host_name, port, workers) = {
                    let lock = config.lock();
                    let host_name = match lock.host_name.as_ref() {
                        None => "127.0.0.1".to_string(),
                        Some(name) => name.to_string()
                    };

                    let port = lock.port.unwrap_or_else(|| 8080);

                    let workers = lock.workers;
                    (host_name, port, workers)
                };

                let server = actix_web::HttpServer::new(move || {
                    let config = Arc::clone(&config);

                    let lock = config.lock();

                    let app = App::new()
                        .wrap(actix_web::middleware::Compress::default());


                    let mut directory = std::path::PathBuf::new();
                    directory.push(&lock.directory);
                    let mut files = actix_files::Files::new(lock.path.as_ref(), directory);
                    if lock.show_files {
                        files = files.show_files_listing();
                    }
                    if let Some(index) = lock.index.as_deref() {
                        files = files.index_file(index);
                    }
                    app.service(files)
                })
                    .workers(workers as usize)
                    .bind((host_name.deref(), port));

                rt_handle.block_on(async move {
                    match server {
                        Ok(server) => {
                            let server = server.run();

                            {
                                *handle.write() = Some(server.handle());
                            }

                            status.store(ServerStatus::Active as u8, Ordering::SeqCst);

                            let status_callback_lock = status_callback.read();
                            if let Some(callback) = status_callback_lock.deref() {
                                callback.on_change(ServerStatus::Active);
                                drop(status_callback_lock);
                            }

                            callback.on_success();
                            match server.await {
                                Ok(_) => {
                                    status.store(ServerStatus::Inactive as u8, Ordering::SeqCst);
                                    *handle.write() = None;

                                    let status_callback_lock = status_callback.read();
                                    if let Some(callback) = status_callback_lock.deref() {
                                        callback.on_change(ServerStatus::Inactive);
                                        drop(status_callback_lock);
                                    }
                                }
                                Err(_) => {
                                    status.store(ServerStatus::Inactive as u8, Ordering::SeqCst);
                                    *handle.write() = None;

                                    let status_callback_lock = status_callback.read();
                                    if let Some(callback) = status_callback_lock.deref() {
                                        callback.on_change(ServerStatus::Inactive);
                                        drop(status_callback_lock);
                                    }
                                }
                            }
                        }
                        Err(error) => {
                            callback.on_error(error.to_string());
                        }
                    }
                })
            });
        } else {
            callback.on_error(INTERNAL_START_ERROR.to_string())
        }
    }

    pub fn stop(&self, wait: bool, callback: Box<dyn Callback>) {
        let rt_handle = self.runtime.read().as_ref().map(|rt| rt.tokio_runtime().handle().clone());
        if let Some(rt_handle) = rt_handle {
            let status_callback = Arc::clone(&self.status_callback);
            if self.status.load(Ordering::SeqCst) == ServerStatus::Active as u8 {
                if wait {
                    rt_handle.block_on(async {
                        if let Some(handle) = self.handle.read().as_ref() {
                            self.status.store(ServerStatus::Stopping as u8, Ordering::SeqCst);

                            let status_callback_lock = status_callback.read();
                            if let Some(callback) = status_callback_lock.deref() {
                                callback.on_change(ServerStatus::Stopping);
                                drop(status_callback_lock);
                            }

                            handle.stop(true).await;
                            callback.on_success()
                        }
                    });
                } else {
                    let handle = self.handle.read().as_ref().map(|handle| handle.clone());
                    if let Some(handle) = handle {
                        let status = Arc::clone(&self.status);
                        rt_handle.clone().spawn_blocking(move || {
                            rt_handle.block_on(async {
                                status.store(ServerStatus::Stopping as u8, Ordering::SeqCst);

                                let status_callback_lock = status_callback.read();
                                if let Some(callback) = status_callback_lock.deref() {
                                    callback.on_change(ServerStatus::Stopping);
                                    drop(status_callback_lock);
                                }

                                handle.stop(true).await;
                                callback.on_success()
                            })
                        });
                    }
                }
            } else {
                callback.on_error(INACTIVE_ERROR.to_string())
            }
        } else {
            callback.on_error(INACTIVE_ERROR.to_string())
        }
    }

    pub fn set_status_callback(&self, callback: Box<dyn StatusCallback>) {
        *self.status_callback.write() = Some(callback);
    }

    pub fn clear_status_callback(&self) {
        *self.status_callback.write() = None;
    }

    pub fn status(&self) -> ServerStatus {
        match self.status.load(Ordering::SeqCst) {
            0 => ServerStatus::Inactive,
            1 => ServerStatus::Active,
            2 => ServerStatus::Crashed,
            3 => ServerStatus::Starting,
            4 => ServerStatus::Stopping,
            _ => unreachable!(),
        }
    }
}