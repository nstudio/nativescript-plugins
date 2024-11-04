use crate::static_server::{Callback, ServerStatus, StatusCallback};
use actix_web::dev::ServerHandle;
use actix_web::rt::Runtime;
use actix_web::web::{Bytes, Data};
use actix_web::{rt, App, Error, HttpRequest, HttpResponse};
use actix_ws::{AggregatedMessage, CloseReason, Session};
use bytestring::ByteString;
use futures_util::StreamExt as _;
use parking_lot::{Mutex, RwLock};
use std::collections::HashMap;
use std::fmt::{Debug, Formatter};
use std::ops::Deref;
use std::sync::atomic::{AtomicU64, AtomicU8, Ordering};
use std::sync::Arc;

const ACTIVE_ERROR: &str = "Server has already started";

const INACTIVE_ERROR: &str = "Server has not started";
const INTERNAL_START_ERROR: &str = "Failed to start server";

#[derive(Debug, Clone)]
pub struct WebSocketServiceOptions {
    pub logger: bool,
    pub path: String,
    pub host_name: Option<String>,
    pub port: Option<u16>,
    pub workers: u32,
    pub auto_pong: bool,
    pub max_payload: Option<usize>,
}


#[derive(Debug, Clone)]
pub enum Message {
    Text(ByteString),
    Binary(Bytes),
    Pong(Option<Bytes>),
    Ping(Option<Bytes>),
}
impl Message {
    pub fn new_text(text: impl Into<ByteString>) -> Message {
        Message::Text(text.into())
    }

    pub fn new_binary(data: impl Into<Bytes>) -> Message {
        Message::Binary(data.into())
    }

    pub fn empty_binary() -> Message {
        Message::Binary(Bytes::new())
    }


    pub fn new_pong(data: Option<Vec<u8>>) -> Message {
        Message::Pong(data.map(Bytes::from))
    }

    pub fn new_ping(data: Option<Vec<u8>>) -> Message {
        Message::Ping(data.map(Bytes::from))
    }
}

#[derive(Debug, Clone)]
pub enum Reason {
    None,
    Some(CloseReason),
}

impl From<Option<CloseReason>> for Reason {
    fn from(value: Option<CloseReason>) -> Self {
        if let Some(reason) = value {
            return Self::Some(reason);
        }
        Self::None
    }
}

impl Into<Option<CloseReason>> for Reason {
    fn into(self) -> Option<CloseReason> {
        match self {
            Reason::None => None,
            Reason::Some(reason) => Some(reason)
        }
    }
}
pub trait WebSocketConnectCallback: Send {
    fn on_connect(&self, client_id: u64);
}
pub trait WebSocketDisconnectCallback: Send {
    fn on_disconnect(&self, client_id: u64, reason: Reason);
}
pub trait WebSocketMessageCallback: Send {
    fn on_message(&self, client_id: u64, message: Message);
}

pub trait WebSocketErrorCallback: Send {
    fn on_error(&self, client_id: u64, error: String);
}

pub struct Server {
    next_id: Arc<AtomicU64>,
    next_client_id: Arc<AtomicU64>,
    runtime: Arc<RwLock<Option<Runtime>>>,
    handle: Arc<RwLock<Option<ServerHandle>>>,
    config: Arc<Mutex<WebSocketServiceOptions>>,
    status: Arc<AtomicU8>,
    status_callback: Arc<RwLock<Option<Box<dyn StatusCallback>>>>,
    clients: Arc<RwLock<HashMap<u64, Client>>>,
    connect_callback: Arc<RwLock<HashMap<u64, Box<dyn WebSocketConnectCallback>>>>,
    disconnect_callback: Arc<RwLock<HashMap<u64, Box<dyn WebSocketDisconnectCallback>>>>,
    message_callback: Arc<RwLock<HashMap<u64, Box<dyn WebSocketMessageCallback>>>>,
    error_callback: Arc<RwLock<HashMap<u64, Box<dyn WebSocketErrorCallback>>>>,
}

impl Debug for Server {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Server")
            .field("runtime", &self.runtime)
            .field("handle", &self.handle)
            .field("config", &self.config)
            .field("status", &self.status)
            .field("status_callback", &self.status_callback)
            .field("clients", &self.clients)
            .finish()
    }
}

impl Clone for Server {
    fn clone(&self) -> Self {
        Server {
            next_id: Arc::clone(&self.next_id),
            next_client_id: Arc::clone(&self.next_client_id),
            runtime: Arc::clone(&self.runtime),
            handle: Arc::clone(&self.handle),
            config: Arc::clone(&self.config),
            status: Arc::clone(&self.status),
            status_callback: Arc::clone(&self.status_callback),
            clients: Arc::clone(&self.clients),
            connect_callback: Arc::clone(&self.connect_callback),
            disconnect_callback: Arc::clone(&self.disconnect_callback),
            message_callback: Arc::clone(&self.message_callback),
            error_callback: Arc::clone(&self.error_callback),
        }
    }
}

unsafe impl Send for Server {}

unsafe impl Sync for Server {}

#[derive(Clone)]
pub struct Client {
    id: u64,
    session: Session,
    // todo use arc
    headers: Arc<RwLock<HashMap<String, String>>>,
}

impl Client {
    pub fn id(&self) -> u64 {
        self.id
    }

    pub fn headers(&self) -> &Arc<RwLock<HashMap<String, String>>> {
        &self.headers
    }
}

impl Debug for Client {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Client")
            .field("id", &self.id)
            .finish()
    }
}

impl Server {
    pub fn new(
        options: WebSocketServiceOptions,
    ) -> Self {
        let rt = Runtime::new().unwrap();
        Self { next_id: Arc::new(AtomicU64::new(1)), next_client_id: Arc::new(AtomicU64::new(1)), runtime: Arc::new(RwLock::new(Some(rt))), handle: Default::default(), config: Arc::new(Mutex::new(options)), status: Default::default(), status_callback: Arc::new(RwLock::new(None)), clients: Arc::new(Default::default()), connect_callback: Arc::new(Default::default()), disconnect_callback: Arc::new(Default::default()), message_callback: Arc::new(Default::default()), error_callback: Arc::new(Default::default()) }
    }

    async fn handle_ws(req: HttpRequest, stream: actix_web::web::Payload, data: Data<Server>) -> Result<HttpResponse, Error> {
        let (mut res, session, stream) = actix_ws::handle(&req, stream)?;

        let (policy, max_payload, auto_pong) = {
            let lock = data.config.lock();
            (format!("connect-src https: ws://{}:{};", lock.host_name.as_deref().unwrap_or("localhost"), lock.port.unwrap_or(8081)), lock.max_payload.unwrap_or(100 * 1024 * 1024), lock.auto_pong)
        };

        res.headers_mut()
            .append(actix_web::http::header::CONTENT_SECURITY_POLICY, actix_web::http::header::HeaderValue::try_from(policy)?);

        let mut headers = HashMap::new();
        for (k, v) in res.headers_mut().iter() {
            if let Ok(v) = v.to_str() {
                headers.insert(k.to_string(), v.to_string());
            }
        }
        let headers = Arc::new(RwLock::new(headers));
        let id = data.next_client_id.fetch_add(1, Ordering::SeqCst);
        let client = Client { id, session: session.clone(), headers: headers.clone() };
        {
            data.clients.write().insert(id, client);
        }
        let mut client = Client { id, session: session.clone(), headers };


        let mut stream = stream
            .aggregate_continuations()
            .max_continuation_size(1024 * 1024 * 8);

        let connect_callback = Arc::clone(&data.connect_callback);

        {
            let lock = connect_callback.read();
            for (_, cb) in &*lock {
                cb.on_connect(id);
            }
        }

        rt::spawn(async move {
            while let Some(msg) = stream.recv().await {
                match msg {
                    Ok(AggregatedMessage::Text(text)) => {
                        let mut lock = data.message_callback.write();
                        for (_, cb) in lock.iter_mut() {
                            cb.on_message(id, Message::Text(text.clone()));
                        }
                    }

                    Ok(AggregatedMessage::Binary(bin)) => {
                        let mut lock = data.message_callback.write();
                        for (_, cb) in lock.iter_mut() {
                            cb.on_message(id, Message::Binary(bin.clone()));
                        }
                    }

                    Ok(AggregatedMessage::Ping(msg)) => {
                        if auto_pong {
                            if let Err(_) = client.clone().session.pong(msg.as_ref()).await {}
                        } else {
                            let mut lock = data.message_callback.write();
                            for (_, cb) in lock.iter_mut() {
                                cb.on_message(id, Message::Ping(Some(msg.clone())));
                            }
                        }
                    }

                    Ok(AggregatedMessage::Pong(msg)) => {
                        let mut lock = data.message_callback.write();
                        for (_, cb) in lock.iter_mut() {
                            cb.on_message(id, Message::Pong(Some(msg.clone())));
                        }
                    }

                    Ok(AggregatedMessage::Close(close_reason)) => {
                        let reason = Reason::from(close_reason);
                        let reason_2 = reason.clone();
                         let _ = client.session.close(reason_2.into()).await;
                        let mut lock = data.disconnect_callback.write();
                        for (_, cb) in lock.iter_mut() {
                            cb.on_disconnect(id, reason.clone());
                        }
                        break;
                    }

                    Err(error) => {
                        let mut lock = data.error_callback.write();
                        let error = error.to_string();
                        for (_, cb) in lock.iter_mut() {
                            cb.on_error(id, error.clone());
                        }
                    }
                }
            }
            let _ = session.close(None).await;
            let mut lock = data.clients.write();
            lock.remove(&id);
        });
        Ok(res)
    }

    pub fn client(&self, client_id: u64) -> Option<Client> {
        self.clients.read().get(&client_id).cloned()
    }
    pub fn start(&self, callback: Box<dyn Callback>) {
        let self_server = self.clone();
        if self.status.load(Ordering::SeqCst) == ServerStatus::Active as u8 {
            callback.on_error(ACTIVE_ERROR.to_string());
            return;
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

                    let port = lock.port.unwrap_or_else(|| 8081);

                    let workers = lock.workers;
                    (host_name, port, workers)
                };

                let server = actix_web::HttpServer::new(move || {
                    let config = Arc::clone(&config);
                    let lock = config.lock();
                    let app = App::new()
                        .app_data(Data::new(self_server.clone()))
                        .wrap(actix_web::middleware::Compress::default());
                    app
                        .route(lock.path.as_ref(), actix_web::web::get().to(Self::handle_ws))
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
            callback.on_error(INACTIVE_ERROR.to_string());
        }
    }

    pub fn broadcast(&self, message: Message) {
        let clients = Arc::clone(&self.clients);
        rt::spawn(async move {
            let mut clients = clients.write();
            match message {
                Message::Text(text) => {
                    for (_, client) in clients.iter_mut() {
                        let _ = client.session.text(text.clone()).await;
                    }
                }
                Message::Binary(bin) => {
                    for (_, client) in clients.iter_mut() {
                        let _ = client.session.binary(bin.clone()).await;
                    }
                }
                _ => {}
            }
        });
    }

    pub fn send(&self, message: Message, id: u64) {
        let clients = Arc::clone(&self.clients);
        rt::spawn(async move {
            let mut clients = clients.write();
            if let Some(client) = clients.get_mut(&id) {
                match message {
                    Message::Text(text) => {
                        let _ = client.session.text(text.clone()).await;
                    }
                    Message::Binary(bin) => {
                        let _ = client.session.binary(bin).await;
                    }
                    Message::Pong(msg) => {
                        let msg = msg.as_deref().unwrap_or(b"");
                        let _ = client.session.pong(msg).await;
                    }
                    Message::Ping(msg) => {
                        let msg = msg.as_deref().unwrap_or(b"");
                        let _ = client.session.pong(msg).await;
                    }
                }
            }
        });
    }

    pub fn set_status_callback(&self, callback: Box<dyn StatusCallback>) {
        *self.status_callback.write() = Some(callback);
    }

    pub fn clear_status_callback(&self) {
        *self.status_callback.write() = None;
    }

    pub fn add_on_connect(&self, callback: Box<dyn WebSocketConnectCallback>) -> u64 {
        let next_id = self.next_id.fetch_add(1, Ordering::SeqCst);
        self.connect_callback.write().insert(next_id, callback);
        next_id
    }

    pub fn remove_on_connect(&self, id: u64) {
        self.connect_callback.write().remove(&id);
    }

    pub fn add_on_message(&self, callback: Box<dyn WebSocketMessageCallback>) -> u64 {
        let next_id = self.next_id.fetch_add(1, Ordering::SeqCst);
        self.message_callback.write().insert(next_id, callback);
        next_id
    }

    pub fn remove_on_message(&self, id: u64) {
        self.message_callback.write().remove(&id);
    }

    pub fn add_on_disconnect(&self, callback: Box<dyn WebSocketDisconnectCallback>) -> u64 {
        let next_id = self.next_id.fetch_add(1, Ordering::SeqCst);
        self.disconnect_callback.write().insert(next_id, callback);
        next_id
    }

    pub fn remove_on_disconnect(&self, id: u64) {
        self.disconnect_callback.write().remove(&id);
    }

    pub fn add_on_error(&self, callback: Box<dyn WebSocketErrorCallback>) -> u64 {
        let next_id = self.next_id.fetch_add(1, Ordering::SeqCst);
        self.error_callback.write().insert(next_id, callback);
        next_id
    }

    pub fn remove_on_error(&self, id: u64) {
        self.error_callback.write().remove(&id);
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