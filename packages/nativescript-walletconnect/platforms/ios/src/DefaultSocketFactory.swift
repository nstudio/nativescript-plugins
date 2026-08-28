//
//  DefaultSocketFactory.swift
//
//  Created by Osei Fortune on 09/01/2023.
//  Copyright © 2023 NativeScript. All rights reserved.
//
import Foundation
import Starscream
import WalletConnectSwiftV2

extension WebSocket: WebSocketConnecting {}

struct SocketFactory: WebSocketFactory {
    func create(with url: URL) -> WebSocketConnecting {
        return WebSocket(url: url)
    }
}
