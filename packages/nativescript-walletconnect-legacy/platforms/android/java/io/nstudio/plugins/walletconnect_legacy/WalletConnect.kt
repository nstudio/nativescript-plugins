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

class WalletConnect constructor(context: Context) {
  private var client: OkHttpClient = OkHttpClient.Builder()
    .build()
  private var moshi: Moshi = Moshi.Builder().build()
  private var storage: WCSessionStore
  private lateinit var config: Session.Config
  private lateinit var session: Session

  private lateinit var meta: Meta

  var listener: Callback? = null

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
        val response = JSONObject()
        when (call) {
          is Session.MethodCall.SessionRequest -> {
            response.put("event", "session_request")
          }

          is Session.MethodCall.SessionUpdate -> {
            response.put("event", "session_update")
          }

          is Session.MethodCall.SendTransaction -> {
            response.put("event", "send_transaction")
          }

          is Session.MethodCall.SignMessage -> {
            response.put("event", "session_request")
          }

          is Session.MethodCall.Custom -> {
            response.put("event", "session_request")
          }

          is Session.MethodCall.Response -> {
            response.put("event", "session_request")
          }
        }
      }

      override fun onStatus(status: Session.Status) {
        when (status) {
          Session.Status.Connected -> {
            listener?.onStatus("connected", null)
          }

          Session.Status.Disconnected -> {
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
}
