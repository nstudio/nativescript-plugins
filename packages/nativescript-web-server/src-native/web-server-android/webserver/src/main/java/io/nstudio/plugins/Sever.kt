package io.nstudio.plugins

class Sever(
  logger: Boolean,
  path: String,
  directory: String,
  index: String,
  hostName: String,
  port: Short,
  workers: Int,
  showFiles: Boolean
) {
  private var server: Long = init(
    logger, path, directory, index, hostName, port, workers, showFiles
  )


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


  companion object {
    @JvmStatic
    private external fun init(
      logger: Boolean,
      path: String,
      directory: String,
      index: String,
      hostName: String,
      port: Short,
      workers: Int,
      showFiles: Boolean,
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
  }
}
