package io.nstudio.plugins.walletconnect_legacy

import android.content.Context
import com.google.gson.Gson
import com.squareup.moshi.Moshi
import okhttp3.OkHttpClient
import org.json.JSONObject
import org.walletconnect.Session
import org.walletconnect.impls.FileWCSessionStore
import org.walletconnect.impls.WCSessionStore
import java.io.File
import java.util.Random
import java.util.UUID
import org.komputing.khex.extensions.toNoPrefixHexString
import org.walletconnect.impls.MoshiPayloadAdapter
import org.walletconnect.impls.OkHttpTransport
import org.walletconnect.impls.WCSession
import java.math.BigInteger
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory

class WalletConnect constructor(context: Context) {
  private var client: OkHttpClient = OkHttpClient.Builder()
    .build()
  private var moshi: Moshi = Moshi.Builder()
    .add(KotlinJsonAdapterFactory())
    .build()
  private var storage: WCSessionStore
  private lateinit var config: Session.Config
  private lateinit var session: Session

  private lateinit var meta: Meta

  var listener: Callback? = null

  val clientId: String = UUID.randomUUID().toString()

  val handshakeId: Long  = - 1

  data class Meta(
    val url: String? = null,
    val name: String? = null,
    val description: String? = null,
    val icons: List<String>? = null
  ) {
    internal fun toMeta(): Session.PeerMeta {
      return Session.PeerMeta(url, name, description, icons)
    }
  }

  init {
    storage = FileWCSessionStore(File(context.cacheDir, "session_store.json").apply { createNewFile() }, moshi)
  }

  constructor(context: Context, meta: Meta, topic: String = UUID.randomUUID().toString(), bridge: String? = null, key: String = ByteArray(32).also { Random().nextBytes(it) }.toNoPrefixHexString(), protocol: String = "wc", version: Int = 1) : this(context) {
    config = Session.Config(
      topic, bridge, key, protocol, version
    )
    this.meta = meta
    initSession()
  }

  constructor(context: Context, meta: Meta, uri: String) : this(context) {
    config = Session.Config.fromWCUri(uri)
    this.meta = meta
    initSession()
  }

  interface Callback {
    fun onStatus(event: String, data: Any?)

    fun onMethod(event: String, data: String)
  }

  interface RequestCallback {
    fun onResponse(id: Long, error: Session.Error?, result: Any?)
  }

  private fun initSession() {
    val session = WCSession(
      config.toFullyQualifiedConfig(),
      MoshiPayloadAdapter(moshi),
      storage,
      OkHttpTransport.Builder(client, moshi),
      meta.toMeta()
    )
    session.addCallback(object : Session.Callback {
      override fun onMethodCall(call: Session.MethodCall) {
        val response = Gson()
        when (call) {
          is Session.MethodCall.SessionRequest -> {
            chainId = call.id
            listener?.onMethod("session_request", response.toJson(call))
          }

          is Session.MethodCall.SessionUpdate -> {
            listener?.onMethod("session_update", response.toJson(call))
          }

          is Session.MethodCall.SendTransaction -> {
            listener?.onMethod("send_transaction", response.toJson(call))
          }

          is Session.MethodCall.SignMessage -> {
            listener?.onMethod("sign_message", response.toJson(call))
          }

          is Session.MethodCall.Custom -> {
            listener?.onMethod("custom", response.toJson(call))
          }

          is Session.MethodCall.Response -> {
            listener?.onMethod("response", response.toJson(call))
          }
        }
      }

      override fun onStatus(status: Session.Status) {
        when (status) {
          Session.Status.Connected -> {
            connected = true
            listener?.onStatus("connected", null)
          }

          Session.Status.Disconnected -> {
            connected = false
            listener?.onStatus("disconnected", null)
          }

          Session.Status.Approved -> {
            listener?.onStatus("approved", null)
          }

          Session.Status.Closed -> {
            listener?.onStatus("closed", null)
          }

          is Session.Status.Error -> {
            listener?.onStatus("error", status.throwable)
          }
        }
      }
    })
    this.session = session
  }

  val uri: String
    get() {
      return config.toWCUri()
    }


  val bridge: String
    get() {
      return config.bridge ?: ""
    }

  val handshakeTopic: String
    get() {
      return config.handshakeTopic
    }

  var connected: Boolean = false
    private set

  var chainId: Long = 0
    private set

  val key: String
    get() {
      return config.key ?: ""
    }

  val approvedAccounts: List<String>
    get() {
      return session.approvedAccounts() ?: listOf()
    }

  fun init() {
    session.init()
  }

  fun offer() {
    session.offer()
  }

  fun kill() {
    session.kill()
  }

  fun approveRequest(id: Long, response: Any) {
    session.approveRequest(id, response)
  }

  fun approve(accounts: List<String>, chainId: Long) {
    session.approve(accounts, chainId)
  }

  fun reject() {
    session.reject()
  }

  fun rejectRequest(id: Long, errorCode: Long, errorMsg: String) {
    session.rejectRequest(id, errorCode, errorMsg)
  }

  fun updateSession(accounts: List<String>, chainId: Long) {
    session.update(accounts, chainId)
  }

  fun sendTransaction(id: Long,
                   from: String,
                   to: String?,
                   nonce: String?,
                   gasPrice: String?,
                   gas: String?,
                   value: String,
                   data: String,
                      callback: RequestCallback){
    session.performMethodCall(Session.MethodCall.SendTransaction(
      id, from, to, nonce, gasPrice, gas, value, data
    )){ response ->
      callback.onResponse(response.id, response.error, response.result)
    }
  }


  fun signTransaction(id: Long,
                      from: String,
                      to: String?,
                      nonce: String?,
                      gasPrice: String?,
                      gas: String?,
                      value: String,
                      data: String, callback: RequestCallback){

    session.performMethodCall(Session.MethodCall.Custom(
      id, "eth_signTransaction", listOf(from, to, nonce, gasPrice, gas, value, data)
    )){ response ->
      callback.onResponse(response.id, response.error, response.result)
    }
  }

  fun signMessage(id: Long, address: String, message: String, callback: RequestCallback){
    session.performMethodCall(Session.MethodCall.SignMessage(id, address, message)){ response ->
      callback.onResponse(response.id, response.error, response.result)
    }
  }

  fun signPersonalMessage(id: Long, address: String, message: String, callback: RequestCallback){
    session.performMethodCall(Session.MethodCall.Custom(id, "personal_sign", listOf(message, address))){ response ->
      callback.onResponse(response.id, response.error, response.result)
    }
  }

  fun signTypedData(params: List<String>, callback: RequestCallback){
    session.performMethodCall(Session.MethodCall.Custom(payloadId(), "eth_signTypedData", params)){ response ->
      callback.onResponse(response.id, response.error, response.result)
    }
  }

  fun customRequest(id: Long, method: String, params: List<*>?, callback: RequestCallback){
    session.performMethodCall(Session.MethodCall.Custom(id, method, params)){ response ->
      callback.onResponse(response.id, response.error, response.result)
    }
  }

  companion object {
    fun payloadId(entropy: Int = 3): Long {
      val date = System.currentTimeMillis().toDouble() * Math.pow(10.0, entropy.toDouble())
      val extra = Math.floor(Math.random() * Math.pow(10.0, entropy.toDouble()))
      return (date + extra).toLong()
    }
  }
}
