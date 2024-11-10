package io.nstudio.plugins.webserver.websocket

import java.nio.ByteBuffer


class Server(
  logger: Boolean,
  path: String,
  maxPayload: Int,
  hostName: String?,
  port: Short,
  workers: Int,
  autoPong: Boolean,
) {

  private var clients = mutableMapOf<Long, Client>()

  private var server: Long = init(
    logger, path, maxPayload, hostName, port, workers, autoPong
  )

  class Client(native: Long, server: Server)


  @Synchronized
  @Throws(Throwable::class)
  protected fun finalize() {
    if (server != 0L) {
      release(server)
      server = 0
    }
  }

  interface Callback {
    fun onError(error: String)
    fun onSuccess()
  }

  interface ConnectCallback {
    fun onConnect(clientId: Long)
  }

  interface DisconnectCallback {
    fun onDicConnect(clientId: Long, code: Short, description: String?)
  }

  interface MessageCallback {
    fun onMessage(clientId: Long, text: String)

    fun onMessage(clientId: Long, data: ByteBuffer)

    fun onPing(clientId: Long, data: ByteBuffer)

    fun onPong(clientId: Long, data: ByteBuffer)
  }

  interface ErrorCallback {
    fun onError(clientId: Long, error: String)
  }

  interface StatusCallback {
    fun onChange(status: Int)
  }

  val status: Int
    get() {
      return status(server)
    }

  fun start(callback: Callback) {
    start(server, callback)
  }

  fun stop(wait: Boolean, callback: Callback) {
    stop(server, wait, callback)
  }

  fun setStatusCallback(callback: StatusCallback?) {
    if (callback == null) {
      clearStatusCallback(server)
    } else {
      setStatusCallback(server, callback)
    }
  }

  fun send(text: String, id: Long) {
    sendText(server, id, text)
  }

  fun send(binary: ByteBuffer, id: Long) {
    if (binary.isDirect) {
      sendBinaryBuffer(server, id, binary)
    } else {
      sendBinaryBytes(server, id, binary.array())
    }
  }

  fun ping(binary: ByteBuffer?, id: Long) {
    binary?.let {
      if (it.isDirect) {
        sendPingBuffer(server, id, it)
      } else {
        sendPingBytes(server, id, it.array())
      }
    } ?: sendPingEmpty(server, id)
  }

  fun pong(binary: ByteBuffer?, id: Long) {
    binary?.let {
      if (it.isDirect) {
        sendPongBuffer(server, id, it)
      } else {
        sendPongBytes(server, id, it.array())
      }
    } ?: sendPongEmpty(server, id)
  }

  fun broadcast(text: String) {
    broadcastText(server, text)
  }

  fun broadcast(binary: ByteBuffer) {
    if (binary.isDirect) {
      broadcastBinaryBuffer(server, binary)
    } else {
      broadcastBinaryBytes(server, binary.array())
    }
  }

  fun broadcastPing(binary: ByteBuffer?) {
    binary?.let {
      if (it.isDirect) {
        broadcastPingBuffer(server, it)
      } else {
        broadcastPingBytes(server, it.array())
      }
    } ?: broadcastPingEmpty(server)
  }

  fun broadcastPong(binary: ByteBuffer?) {
    binary?.let {
      if (it.isDirect) {
        broadcastPongBuffer(server, it)
      } else {
        broadcastPongBytes(server, it.array())
      }
    } ?: broadcastPongEmpty(server)
  }

  fun addOnMessage(callback: MessageCallback): Long {
    return nativeAddOnMessage(server, callback)
  }

  fun removeOnMessage(id: Long) {
    nativeRemoveOnMessage(server, id)
  }

  fun addOnPing(callback: MessageCallback): Long {
    return nativeAddOnMessage(server, object : MessageCallback {
      override fun onMessage(clientId: Long, text: String) {}

      override fun onMessage(clientId: Long, data: ByteBuffer) {}

      override fun onPing(clientId: Long, data: ByteBuffer) {
        callback.onPing(clientId, data)
      }

      override fun onPong(clientId: Long, data: ByteBuffer) {}
    })
  }

  fun removeOnPing(id: Long) {
    nativeRemoveOnMessage(server, id)
  }


  fun addOnPong(callback: MessageCallback): Long {
    return nativeAddOnMessage(server, object : MessageCallback {
      override fun onMessage(clientId: Long, text: String) {}

      override fun onMessage(clientId: Long, data: ByteBuffer) {}

      override fun onPing(clientId: Long, data: ByteBuffer) {}

      override fun onPong(clientId: Long, data: ByteBuffer) {
        callback.onPong(clientId, data)
      }
    })
  }

  fun removeOnPong(id: Long) {
    nativeRemoveOnMessage(server, id)
  }

  fun addOnConnect(callback: ConnectCallback): Long {
    return nativeAddOnConnect(server, object : ConnectCallback {
      override fun onConnect(clientId: Long) {
        clients.put(clientId, Client(clientId, this@Server))
        callback.onConnect(clientId)
      }
    })
  }

  fun removeOnConnect(id: Long) {
    nativeRemoveOnConnect(server, id)
  }


  fun addOnDisconnect(callback: DisconnectCallback): Long {
    return nativeAddOnDisconnect(server, callback)
  }

  fun removeOnDisconnect(id: Long) {
    nativeRemoveOnDisconnect(server, id)
    clients.remove(id)
  }


  fun addOnError(callback: ErrorCallback): Long {
    return nativeAddOnError(server, callback)
  }

  fun removeOnError(id: Long) {
    nativeRemoveOnError(server, id)
  }


  companion object {
    @JvmStatic
    private external fun init(
      logger: Boolean,
      path: String,
      maxPayload: Int,
      hostName: String?,
      port: Short,
      workers: Int,
      autoPong: Boolean,
    ): Long

    @JvmStatic
    private external fun release(
      server: Long
    )

    @JvmStatic
    private external fun start(
      server: Long, callback: Callback
    )

    @JvmStatic
    private external fun stop(
      server: Long, wait: Boolean, callback: Callback
    )

    @JvmStatic
    private external fun setStatusCallback(
      server: Long, callback: StatusCallback
    )

    @JvmStatic
    private external fun clearStatusCallback(
      server: Long
    )

    @JvmStatic
    private external fun status(
      server: Long
    ): Int

    @JvmStatic
    private external fun hasClient(
      server: Long, clientId: Long
    ): Boolean

    @JvmStatic
    private external fun sendPingEmpty(
      server: Long,
      clientId: Long
    )

    @JvmStatic
    private external fun sendPingBytes(
      server: Long,
      clientId: Long,
      data: ByteArray,
    )

    @JvmStatic
    private external fun broadcastPingEmpty(
      server: Long
    )

    @JvmStatic
    private external fun broadcastPingBytes(
      server: Long,
      data: ByteArray,
    )

    @JvmStatic
    private external fun sendPingBuffer(
      server: Long,
      clientId: Long,
      data: ByteBuffer,
    )

    @JvmStatic
    private external fun broadcastPingBuffer(
      server: Long,
      data: ByteBuffer,
    )

    @JvmStatic
    private external fun sendPongEmpty(
      server: Long,
      clientId: Long
    )


    @JvmStatic
    private external fun sendPongBytes(
      server: Long,
      clientId: Long,
      data: ByteArray,
    )

    @JvmStatic
    private external fun broadcastPongEmpty(
      server: Long
    )

    @JvmStatic
    private external fun broadcastPongBytes(
      server: Long,
      data: ByteArray,
    )

    @JvmStatic
    private external fun sendPongBuffer(
      server: Long,
      clientId: Long,
      data: ByteBuffer,
    )

    @JvmStatic
    private external fun broadcastPongBuffer(
      server: Long,
      data: ByteBuffer,
    )


    @JvmStatic
    private external fun sendText(
      server: Long,
      clientId: Long,
      text: String,
    )

    @JvmStatic
    private external fun broadcastText(
      server: Long,
      text: String,
    )


    @JvmStatic
    private external fun sendBinaryBytes(
      server: Long,
      clientId: Long,
      data: ByteArray,
    )

    @JvmStatic
    private external fun broadcastBinaryBytes(
      server: Long,
      data: ByteArray,
    )

    @JvmStatic
    private external fun sendBinaryBuffer(
      server: Long,
      clientId: Long,
      data: ByteBuffer,
    )

    @JvmStatic
    private external fun broadcastBinaryBuffer(
      server: Long,
      data: ByteBuffer,
    )

    @JvmStatic
    private external fun nativeAddOnConnect(
      server: Long,
      callback: ConnectCallback,
    ): Long

    @JvmStatic
    private external fun nativeRemoveOnConnect(
      server: Long,
      id: Long
    )

    @JvmStatic
    private external fun nativeAddOnDisconnect(
      server: Long,
      callback: DisconnectCallback,
    ): Long

    @JvmStatic
    private external fun nativeRemoveOnDisconnect(
      server: Long,
      id: Long
    )

    @JvmStatic
    external fun nativeAddOnMessage(
      server: Long,
      callback: MessageCallback,
    ): Long

    @JvmStatic
    private external fun nativeRemoveOnMessage(
      server: Long,
      id: Long
    )

    @JvmStatic
    private external fun nativeAddOnError(
      server: Long,
      callback: ErrorCallback,
    ): Long

    @JvmStatic
    private external fun nativeRemoveOnError(
      server: Long,
      id: Long
    )

  }
}
