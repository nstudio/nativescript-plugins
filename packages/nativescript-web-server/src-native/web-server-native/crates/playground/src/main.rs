// use web_server_native::{ServerStatus, StaticServiceOptions};
//
// fn main() {
//     let mut server = web_server_native::Server::new_static(
//         StaticServiceOptions {
//             logger: false,
//             path: "/".into(),
//             directory: "./crates/server/files".into(),
//             index: None,
//             host_name: None,
//             port: None,
//             workers: 3,
//         }
//     );
//
//     server.start(None);
//     println!("Hello, world!");
//     let mut count: isize = 0;
//     loop {
//         if count >= 1000000 {
//             server.stop(false, None);
//         }
//         if server.status() == ServerStatus::Inactive {
//             println!("{:?}", server.status());
//             break;
//         }
//         count += 1;
//     }
// }

fn main() {

}