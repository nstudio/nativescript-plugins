package io.nstudio.plugins.walletconnect

import com.google.gson.GsonBuilder
import com.trustwallet.walletconnect.WCClient;
import okhttp3.OkHttpClient
import okhttp3.Response
import okhttp3.WebSocket

class WCClientImpl(builder: GsonBuilder, httpClient: OkHttpClient) :
  WCClient(builder, httpClient) {

  var onConnect: (Boolean) -> Unit = { _ -> }

  override fun onOpen(webSocket: WebSocket, response: Response) {
    super.onOpen(webSocket, response)
    onConnect(isConnected)
  }
}
