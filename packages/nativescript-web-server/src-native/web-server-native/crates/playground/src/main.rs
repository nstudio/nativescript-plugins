use web_server_native::static_server::StaticServiceOptions;
use web_server_native::websocket_server::{Client, Message, Reason, Server, WebSocketServiceOptions};

struct ServerCallback {
    wss: Option<Server>
}
impl web_server_native::static_server::Callback for ServerCallback {
    fn on_success(&self) {
        println!("Server started successfully!");
    }

    fn on_error(&self, error: String) {
        println!("Error: {}", error);
    }
}


impl web_server_native::websocket_server::WebSocketConnectCallback for ServerCallback {
    fn on_connect(&self, client_id: u64) {
        if let Some(wss) = self.wss.as_ref() {
            let message = Message::new_text(format!("Hi {:?}", client_id));
            wss.send(message, client_id);
        }
        println!("WSS:OnConnect {}", client_id);

    }
}

impl web_server_native::websocket_server::WebSocketDisconnectCallback for ServerCallback {
    fn on_disconnect(&self, client_id: u64, reason: Reason) {
        println!("WSS:OnDisconnect {} {reason:?}", client_id);
    }
}

impl web_server_native::websocket_server::WebSocketMessageCallback for ServerCallback {
    fn on_message(&self,client_id: u64,  message: Message) {
        println!("{:?} {:?}", client_id, message)
    }
}

fn main() {
    let (tx, rx) = std::sync::mpsc::channel::<()>();
    let mut server = web_server_native::static_server::Server::new(
        StaticServiceOptions {
            logger: false,
            path: "/".into(),
            directory: "./crates/server/files".into(),
            index: None,
            host_name: None,
            port: None,
            workers: 3,
            show_files: false,
        }
    );

    server.start(Box::new(ServerCallback {wss: None}));

    let wss = Server::new(
        WebSocketServiceOptions {
            logger: false,
            path: "/ws".into(),
            host_name: None,
            port: None,
            workers: 3,
            auto_pong: true,
            max_payload: None,
        }
    );
    let cb = ServerCallback {
        wss: Some(wss.clone())
    };
    wss.add_on_message(Box::new(cb));
    wss.add_on_connect(Box::new(ServerCallback {wss: Some(wss.clone())}));
    wss.add_on_disconnect(Box::new(ServerCallback {wss: Some(wss.clone())}));

    wss.start(Box::new(ServerCallback {wss: Some(wss.clone())}));

    rx.recv().unwrap();
}
