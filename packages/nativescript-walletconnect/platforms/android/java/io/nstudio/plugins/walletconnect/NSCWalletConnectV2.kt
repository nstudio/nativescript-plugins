package io.nstudio.plugins.walletconnect

import android.app.Application
import com.walletconnect.android.Core
import com.walletconnect.android.CoreClient
import com.walletconnect.android.relay.ConnectionType
import com.walletconnect.auth.client.Auth
import com.walletconnect.auth.client.AuthClient
import com.walletconnect.auth.signature.toCacaoSignature
import com.walletconnect.auth.signature.toSignature
import com.walletconnect.sign.client.Sign
import com.walletconnect.sign.client.SignClient
import com.walletconnect.web3.wallet.client.Wallet
import com.walletconnect.web3.wallet.client.Web3Wallet
import org.web3j.crypto.ECKeyPair
import org.web3j.crypto.StructuredDataEncoder
import org.web3j.crypto.Keys
import java.math.BigInteger
import java.nio.ByteBuffer
import java.util.UUID

import java.util.WeakHashMap
import kotlin.experimental.and

import org.bouncycastle.jce.provider.BouncyCastleProvider
import java.security.Security

fun String.decodeHex(): ByteArray {
  check(length % 2 == 0) { "Must have an even length" }

  return removePrefix("0x")
    .chunked(2)
    .map { it.toInt(16).toByte() }
    .toByteArray()
}


fun String.hexStringToByteArray(): ByteArray {
  val HEX_CHARS = "0123456789ABCDEF"
  val result = ByteArray(length / 2)
  for (i in 0 until length step 2) {
    val firstIndex = HEX_CHARS.indexOf(this[i].toUpperCase());
    val secondIndex = HEX_CHARS.indexOf(this[i + 1].toUpperCase());
    val octet = firstIndex.shl(4).or(secondIndex)
    result.set(i.shr(1), octet.toByte())
  }
  return result
}


class NSCWalletConnectV2 {

  class Address internal constructor(address: String) {
    private val address: String

    internal constructor(address: BigInteger) : this(Keys.getAddress(address))

    internal constructor(pair: ECKeyPair) : this(Keys.getAddress(pair))

    init {
      this.address = address
    }

    val rawAddress: ByteArray
      get() {
        return org.web3j.utils.Numeric.hexStringToByteArray(address)
      }

    fun hex(eip55: Boolean): String {
      if (eip55) {
        return Keys.toChecksumAddress(address)
      }
      return "0x$address"
    }
  }

  class PublicKey internal constructor(private val pair: ECKeyPair) {

    val address: Address

    init {
      address = Address(pair.publicKey)
    }

    val rawPublicKey: ByteArray
      get() {
        return pair.publicKey.toByteArray()
      }


    val hex: String
      get() {
        return org.web3j.utils.Numeric.toHexStringWithPrefix(pair.publicKey)
      }

  }

  class PrivateKey {
    val pair: ECKeyPair
    val address: Address
    val publicKey: PublicKey

    constructor() {
      pair = Keys.createEcKeyPair()
      address = Address(pair)
      publicKey = PublicKey(pair)
    }

    constructor(hex: String) {
      pair = ECKeyPair.create(hex.decodeHex())
      address = Address(pair)
      publicKey = PublicKey(pair)
    }

    constructor(bytes: ByteArray) {
      pair = ECKeyPair.create(bytes)
      Keys.getAddress(pair)
      address = Address(pair)
      publicKey = PublicKey(pair)
    }

    val rawPrivateKey: ByteArray
      get() {
        return pair.privateKey.toByteArray()
      }

    fun signTypedData(
      data: String,
      privateKey: PrivateKey,
      needToHash: Boolean
    ): String {
      val struct = StructuredDataEncoder(data)
      return sign(
        struct.hashStructuredData(), privateKey, needToHash
      )
    }

    fun parseTypedData(data: String): StructuredDataEncoder {
      return StructuredDataEncoder(data)
    }

    fun sign(
      message: String,
      privateKey: PrivateKey,
      needToHash: Boolean
    ): String {
      val msg = org.web3j.utils.Numeric.hexStringToByteArray(message)

      val signed = org.web3j.crypto.Sign.signMessage(
        msg, privateKey.pair, needToHash
      )

      val r = org.web3j.utils.Numeric.toHexString(signed.r)
      val s = org.web3j.utils.Numeric.toHexString(signed.s)
      val v = org.web3j.utils.Numeric.toHexString(signed.v)

      return "0x$r$s$v"
    }

    fun sign(
      message: ByteArray,
      privateKey: PrivateKey,
      needToHash: Boolean
    ): String {
      val signed = org.web3j.crypto.Sign.signMessage(
        message, privateKey.pair, needToHash
      )

      val r = org.web3j.utils.Numeric.toHexString(signed.r)
      val s = org.web3j.utils.Numeric.toHexString(signed.s)
      val v = org.web3j.utils.Numeric.toHexString(signed.v)

      return "0x$r$s$v"
    }

    fun getEthereumMessageHash(message: ByteArray): ByteArray {
      return org.web3j.crypto.Sign.getEthereumMessageHash(message)
    }

    val hex: String
      get() {
        return org.web3j.utils.Numeric.toHexStringWithPrefix(pair.privateKey)
      }

  }

  enum class RejectionReason(val value: String) {
    userRejectedRequest("User rejected request"),
    userRejected("User rejected"),
    userRejectedChains("User disapproved requested chains"),
    userRejectedMethods("User disapproved requested json-rpc methods"),
    userRejectedEvents("User disapproved requested event types")
  }

  enum class ConnectionStatus {
    connected,
    disconnected;

    companion object {
      @JvmStatic
      fun fromState(state: Sign.Model.ConnectionState): ConnectionStatus {
        if (state.isAvailable) {
          return connected
        }
        return disconnected
      }
    }
  }

  class Cancellable<T> {

    internal var store: WeakHashMap<*, *>? = null

    internal var onSuccess: (T) -> Unit = {}

    internal var onError: (Any?) -> Unit = {}

    internal val id = UUID.randomUUID().toString()

    @Synchronized
    @Throws(Throwable::class)
    protected fun finalize() {
      cancel()
    }

    fun cancel() {
      store?.remove(id)
    }
  }

  companion object {

    // fixes No such algorithm: ECDSA for provider BC

    // https://github.com/web3j/web3j/issues/915
    @JvmStatic
    fun setupBouncyCastle() {
      val provider = Security.getProvider(BouncyCastleProvider.PROVIDER_NAME)
        ?: // Web3j will set up the provider lazily when it's first used.
        return
      if (provider.javaClass == BouncyCastleProvider::class.java) {
        // BC with same package name, shouldn't happen in real life.
        return
      }
      // Android registers its own BC provider. As it might be outdated and might not include
      // all needed ciphers, we substitute it with a known BC bundled in the app.
      // Android's BC has its package rewritten to "com.android.org.bouncycastle" and because
      // of that it's possible to have another BC implementation loaded in VM.
      Security.removeProvider(BouncyCastleProvider.PROVIDER_NAME)
      Security.insertProviderAt(BouncyCastleProvider(), 1)
    }

    @JvmStatic
    fun createEthSigningSignature(text: String): ByteArray {
      val buf = text.decodeHex()
      val prefix = "\\u{19}Ethereum Signed Message:\n\\($buf)".encodeToByteArray()
      return prefix + buf
    }

    @JvmStatic
    fun eth_hash(message: String): ByteArray {
      val buf = message.decodeHex()
      val prefix = "\\u{19}Ethereum Signed Message:\n${buf.size}".encodeToByteArray()
      return prefix + buf
    }

    @JvmStatic
    fun eth_prefix_hex(buf: ByteArray): ByteArray {
      val prefix = "\\u{19}Ethereum Signed Message:\n${buf.size}".encodeToByteArray()
      return prefix + buf
    }

    private val sessionProposalPublishers: WeakHashMap<String, Cancellable<Sign.Model.SessionProposal>> =
      WeakHashMap()

    private val sessionRequestPublishers: WeakHashMap<String, Cancellable<Sign.Model.SessionRequest>> =
      WeakHashMap()

    private val signSocketConnectionStatusPublishers: WeakHashMap<String, Cancellable<ConnectionStatus>> =
      WeakHashMap()

    private val sessionSettlePublishers: WeakHashMap<String, Cancellable<Sign.Model.SettledSessionResponse>> =
      WeakHashMap()

    private val sessionDeletePublishers: WeakHashMap<String, Cancellable<Sign.Model.DeletedSession>> =
      WeakHashMap()

    private val sessionResponsePublishers: WeakHashMap<String, Cancellable<Sign.Model.SessionRequestResponse>> =
      WeakHashMap()

    private val sessionRejectionPublishers: WeakHashMap<String, Cancellable<Sign.Model.RejectedSession>> =
      WeakHashMap()

    private val sessionUpdateDapp: WeakHashMap<String, Cancellable<Sign.Model.UpdatedSession>> =
      WeakHashMap()

    private val sessionEventPublishers: WeakHashMap<String, Cancellable<Sign.Model.SessionEvent>> =
      WeakHashMap()

    private val sessionExtendPublishers: WeakHashMap<String, Cancellable<Sign.Model.Session>> =
      WeakHashMap()

    private val sessionUpdateWallet: WeakHashMap<String, Cancellable<Sign.Model.SessionUpdateResponse>> =
      WeakHashMap()

    private val sessionsPublisher: WeakHashMap<String, Cancellable<Sign.Model.ApprovedSession>> =
      WeakHashMap()

    private val signError: WeakHashMap<String, Cancellable<Sign.Model.Error>> =
      WeakHashMap()

    private val authRequestPublishers: WeakHashMap<String, Cancellable<Auth.Event.AuthRequest>> =
      WeakHashMap()

    private val authResponsePublishers: WeakHashMap<String, Cancellable<Auth.Event.AuthResponse>> =
      WeakHashMap()

    private val authSocketConnectionStatusPublishers: WeakHashMap<String, Cancellable<Auth.Event.ConnectionStateChange>> =
      WeakHashMap()

    private val authError: WeakHashMap<String, Cancellable<Auth.Event.Error>> =
      WeakHashMap()


    private val signInWalletDelegate = object : SignClient.WalletDelegate {
      override fun onConnectionStateChange(state: Sign.Model.ConnectionState) {
        signSocketConnectionStatusPublishers.forEach {
          it.value.onSuccess(ConnectionStatus.fromState(state))
        }
      }

      override fun onError(error: Sign.Model.Error) {
        signError.forEach {
          it.value.onSuccess(error)
        }
      }

      override fun onSessionDelete(deletedSession: Sign.Model.DeletedSession) {
        sessionDeletePublishers.forEach {
          it.value.onSuccess(deletedSession)
        }
      }

      override fun onSessionProposal(sessionProposal: Sign.Model.SessionProposal) {
        sessionProposalPublishers.forEach {
          it.value.onSuccess(sessionProposal)
        }
      }

      override fun onSessionRequest(sessionRequest: Sign.Model.SessionRequest) {
        sessionRequestPublishers.forEach {
          it.value.onSuccess(sessionRequest)
        }
      }

      override fun onSessionSettleResponse(settleSessionResponse: Sign.Model.SettledSessionResponse) {
        sessionSettlePublishers.forEach {
          it.value.onSuccess(settleSessionResponse)
        }
      }

      override fun onSessionUpdateResponse(sessionUpdateResponse: Sign.Model.SessionUpdateResponse) {
        sessionUpdateWallet.forEach {
          it.value.onSuccess(sessionUpdateResponse)
        }
      }
    }

    private val signInDappDelegate = object : SignClient.DappDelegate {
      override fun onConnectionStateChange(state: Sign.Model.ConnectionState) {
        signSocketConnectionStatusPublishers.forEach {
          it.value.onSuccess(ConnectionStatus.fromState(state))
        }
      }

      override fun onError(error: Sign.Model.Error) {
        signError.forEach {
          it.value.onSuccess(error)
        }
      }

      override fun onSessionApproved(approvedSession: Sign.Model.ApprovedSession) {
        sessionsPublisher.forEach {
          it.value.onSuccess(approvedSession)
        }
      }

      override fun onSessionDelete(deletedSession: Sign.Model.DeletedSession) {
        sessionDeletePublishers.forEach {
          it.value.onSuccess(deletedSession)
        }
      }

      override fun onSessionEvent(sessionEvent: Sign.Model.SessionEvent) {
        sessionEventPublishers.forEach {
          it.value.onSuccess(sessionEvent)
        }
      }

      override fun onSessionExtend(session: Sign.Model.Session) {
        sessionExtendPublishers.forEach {
          it.value.onSuccess(session)
        }
      }

      override fun onSessionRejected(rejectedSession: Sign.Model.RejectedSession) {
        sessionRejectionPublishers.forEach {
          it.value.onSuccess(rejectedSession)
        }
      }

      override fun onSessionRequestResponse(response: Sign.Model.SessionRequestResponse) {
        sessionResponsePublishers.forEach {
          it.value.onSuccess(response)
        }
      }

      override fun onSessionUpdate(updatedSession: Sign.Model.UpdatedSession) {
        sessionUpdateDapp.forEach {
          it.value.onSuccess(updatedSession)
        }
      }

    }

    private val authRequesterResponderDelegate =
      object : AuthClient.ResponderDelegate, AuthClient.RequesterDelegate {
        override fun onAuthRequest(authRequest: Auth.Event.AuthRequest) {
          authRequestPublishers.forEach {
            it.value.onSuccess(authRequest)
          }
        }

        override fun onAuthResponse(authResponse: Auth.Event.AuthResponse) {
          authResponsePublishers.forEach {
            it.value.onSuccess(authResponse)
          }
        }

        override fun onConnectionStateChange(connectionStateChange: Auth.Event.ConnectionStateChange) {
          authSocketConnectionStatusPublishers.forEach {
            it.value.onSuccess(connectionStateChange)
          }
        }

        override fun onError(error: Auth.Event.Error) {
          authError.forEach {
            it.value.onSuccess(error)
          }
        }
      }


    @JvmStatic
    @JvmOverloads
    fun initialize(
      projectId: String,
      relayUrl: String = "relay.walletconnect.com",
      meta: Core.Model.AppMetaData,
      socketConnectionType: ConnectionType,
      application: Application,
      callback: (Throwable?) -> Unit = {}
    ) {
      val url = "wss://$relayUrl?projectId=${projectId}"
      CoreClient.initialize(meta, url, socketConnectionType, application, null) {
        callback(it.throwable)
      }

      val signInit = Sign.Params.Init(core = CoreClient)

      SignClient.initialize(signInit) {
        callback(it.throwable)
      }

      val authInit = Auth.Params.Init(core = CoreClient)

      AuthClient.initialize(authInit) {
        callback(it.throwable)
      }

      val walletInit = Wallet.Params.Init(core = CoreClient)

      Web3Wallet.initialize(walletInit) {
        callback(it.throwable)
      }


      SignClient.setWalletDelegate(signInWalletDelegate)
      SignClient.setDappDelegate(signInDappDelegate)
      AuthClient.setResponderDelegate(authRequesterResponderDelegate)
      AuthClient.setRequesterDelegate(authRequesterResponderDelegate)

    }

    @JvmOverloads
    @JvmStatic
    fun toHexString(value: ByteArray, withPrefix: Boolean = true): String {
      val stringBuilder = StringBuilder()
      if (withPrefix) {
        stringBuilder.append("0x")
      }
      for (element in value) {
        stringBuilder.append(String.format("%02x", element and 0xFF.toByte()))
      }
      return stringBuilder.toString()
    }

    @JvmStatic
    fun bufferToBytes(buffer: ByteBuffer): ByteArray {
      if (buffer.isDirect) {
        val position = buffer.position()
        buffer.rewind()
        val bytes = ByteArray(buffer.remaining())
        buffer.get(bytes)
        buffer.position(position)
        return bytes
      }

      return buffer.array()
    }

    @JvmStatic
    fun networkConnect(callback: (Throwable?) -> Unit) {
      var error: Throwable? = null
      CoreClient.Relay.connect {
        error = Throwable(it)
      }
      callback(error)
    }

    @JvmStatic
    fun networkDisconnect(callback: (Throwable?) -> Unit) {
      var error: Throwable? = null
      CoreClient.Relay.disconnect {
        error = Throwable(it)
      }
      callback(error)
    }

    @JvmStatic
    fun pairPair(uri: String, callback: (Throwable?) -> Unit) {
      var error: Throwable? = null
      CoreClient.Pairing.pair(Core.Params.Pair(uri)) {
        error = it.throwable
      }
      callback(error)
    }

    @JvmStatic
    fun pairCreate(callback: (Core.Model.Pairing?, Throwable?) -> Unit) {
      var error: Throwable? = null
      val pair = CoreClient.Pairing.create {
        error = it.throwable
      }
      callback(pair, error)
    }

    @JvmStatic
    fun pairGetPairings(): List<Core.Model.Pairing> {
      return CoreClient.Pairing.getPairings()
    }

    @JvmStatic
    fun pairDisconnect(topic: String, callback: (Throwable?) -> Unit) {
      var error: Throwable? = null
      CoreClient.Pairing.disconnect(
        Core.Params.Disconnect(topic)
      ) {
        error = it.throwable
      }
      callback(error)
    }

    @JvmStatic
    fun signSendRequest(
      topic: String,
      method: String,
      params: String,
      chainId: String,
      callback: (Throwable?) -> Unit
    ) {
      var error: Throwable? = null
      SignClient.request(
        Sign.Params.Request(topic, method, params, chainId)
      ) {
        error = it.throwable
      }
      callback(error)
    }


    @JvmStatic
    fun signRequest(
      topic: String,
      method: String,
      params: String,
      chainId: String,
      callback: (Throwable?) -> Unit
    ) {
      var error: Throwable? = null
      SignClient.request(
        Sign.Params.Request(topic, method, params, chainId)
      ) {
        error = it.throwable
      }
      callback(error)
    }


    @JvmStatic
    fun signRespond(
      topic: String,
      response: Sign.Model.JsonRpcResponse,
      callback: (Throwable?) -> Unit
    ) {

      var error: Throwable? = null
      SignClient.respond(
        Sign.Params.Response(topic, response)
      ) {
        error = it.throwable
      }
      callback(error)
    }

    @JvmStatic
    fun signApproveSession(
      proposalId: String,
      namespaces: Map<String, Sign.Model.Namespace.Session>,
      callback: (Throwable?) -> Unit
    ) {
      var error: Throwable? = null
      SignClient.approveSession(
        Sign.Params.Approve(
          proposalId,
          namespaces
        )
      ) {
        error = it.throwable
      }

      callback(error)
    }

    @JvmStatic
    fun signRejectSession(
      proposalId: String,
      reason: RejectionReason,
      callback: (Throwable?) -> Unit
    ) {
      var error: Throwable? = null
      SignClient.rejectSession(
        Sign.Params.Reject(
          proposalId,
          reason.value
        )
      ) {
        error = it.throwable
      }
      callback(error)
    }


    @JvmStatic
    fun signUpdate(
      topic: String,
      namespaces: Map<String, Sign.Model.Namespace.Session>,
      callback: (Throwable?) -> Unit
    ) {
      var error: Throwable? = null
      SignClient.update(
        Sign.Params.Update(
          topic,
          namespaces
        )
      ) {
        error = it.throwable
      }
      callback(error)
    }

    @JvmStatic
    fun signConnect(
      namespaces: Map<String, Sign.Model.Namespace.Proposal>,
      pairing: Core.Model.Pairing,
      callback: (Throwable?) -> Unit
    ) {
      SignClient.connect(
        Sign.Params.Connect(
          namespaces, pairing
        ),
        {
          callback(null)
        },
        {
          callback(it.throwable)
        }
      )
    }

    @JvmStatic
    fun signDisconnect(
      topic: String,
      callback: (Throwable?) -> Unit
    ) {
      var error: Throwable? = null
      SignClient.disconnect(
        Sign.Params.Disconnect(topic)
      ) {
        error = it.throwable
      }
      callback(error)
    }

    @JvmStatic
    fun signPing(
      topic: String,
      callback: (String?, Throwable?) -> Unit
    ) {
      SignClient.ping(
        Sign.Params.Ping(topic),
        object : Sign.Listeners.SessionPing {
          override fun onError(pingError: Sign.Model.Ping.Error) {
            callback(null, pingError.error)
          }

          override fun onSuccess(pingSuccess: Sign.Model.Ping.Success) {
            callback(pingSuccess.topic, null)
          }
        }
      )
    }

    /* Errors */

    @JvmStatic
    fun signError(callback: (Sign.Model.Error) -> Unit) {
      val cb = Cancellable<Sign.Model.Error>()
      cb.store = signError
      cb.onSuccess = callback
      signError[cb.id] = cb
    }

    @JvmStatic
    fun authError(callback: (Auth.Event.Error) -> Unit) {
      val cb = Cancellable<Auth.Event.Error>()
      cb.store = authError
      cb.onSuccess = callback
      authError[cb.id] = cb
    }

    /* Errors */

    @JvmStatic
    fun authReject(
      requestId: Long,
      callback: (Throwable?) -> Unit
    ) {
      var error: Throwable? = null
      AuthClient.respond(
        Auth.Params.Respond.Error(requestId, 14001, "Auth request rejected by user")
      ) {
        error = it.throwable
      }
      callback(error)
    }

    @JvmStatic
    fun authRespond(
      requestId: Long,
      signature: Auth.Model.Cacao.Signature,
      account: String,
      callback: (Throwable?) -> Unit
    ) {
      var error: Throwable? = null

      AuthClient.respond(
        Auth.Params.Respond.Result(
          requestId, signature,
          account
        )
      ) {
        error = it.throwable
      }
      callback(error)
    }

    @JvmStatic
    fun authRequest(
      request: Auth.Params.Request,
      callback: (Throwable?) -> Unit
    ) {
      var error: Throwable? = null

      AuthClient.request(
        request,
        {
          callback(null)
        },
        {
          callback(it.throwable)
        }
      )
    }


    @JvmStatic
    fun sessionsPublisher(callback: (Sign.Model.ApprovedSession) -> Unit) {
      val cb = Cancellable<Sign.Model.ApprovedSession>()
      cb.store = sessionsPublisher
      cb.onSuccess = callback
      sessionsPublisher[cb.id] = cb
    }

    @JvmStatic
    fun sessionProposalPublisher(callback: (Sign.Model.SessionProposal) -> Unit) {
      val cb = Cancellable<Sign.Model.SessionProposal>()
      cb.store = sessionProposalPublishers
      cb.onSuccess = callback
      sessionProposalPublishers[cb.id] = cb
    }

    @JvmStatic
    fun sessionRequestPublisher(callback: (Sign.Model.SessionRequest) -> Unit) {
      val cb = Cancellable<Sign.Model.SessionRequest>()
      cb.store = sessionRequestPublishers
      cb.onSuccess = callback
      sessionRequestPublishers[cb.id] = cb
    }

    @JvmStatic
    fun signSocketConnectionStatusPublisher(callback: (ConnectionStatus) -> Unit) {
      val cb = Cancellable<ConnectionStatus>()
      cb.store = signSocketConnectionStatusPublishers
      cb.onSuccess = callback
      signSocketConnectionStatusPublishers[cb.id] = cb
    }

    @JvmStatic
    fun sessionSettlePublisher(callback: (Sign.Model.SettledSessionResponse) -> Unit) {
      val cb = Cancellable<Sign.Model.SettledSessionResponse>()
      cb.store = sessionSettlePublishers
      cb.onSuccess = callback
      sessionSettlePublishers[cb.id] = cb
    }

    @JvmStatic
    fun sessionDeletePublisher(callback: (Sign.Model.DeletedSession) -> Unit) {
      val cb = Cancellable<Sign.Model.DeletedSession>()
      cb.store = sessionDeletePublishers
      cb.onSuccess = callback
      sessionDeletePublishers[cb.id] = cb
    }

    @JvmStatic
    fun sessionResponsePublisher(callback: (Sign.Model.SessionRequestResponse) -> Unit) {
      val cb = Cancellable<Sign.Model.SessionRequestResponse>()
      cb.store = sessionResponsePublishers
      cb.onSuccess = callback
      sessionResponsePublishers[cb.id] = cb
    }

    @JvmStatic
    fun sessionRejectionPublisher(callback: (Sign.Model.RejectedSession) -> Unit) {
      val cb = Cancellable<Sign.Model.RejectedSession>()
      cb.store = sessionRejectionPublishers
      cb.onSuccess = callback
      sessionRejectionPublishers[cb.id] = cb
    }

    @JvmStatic
    fun sessionUpdateDapp(callback: (Sign.Model.UpdatedSession) -> Unit) {
      val cb = Cancellable<Sign.Model.UpdatedSession>()
      cb.store = sessionUpdateDapp
      cb.onSuccess = callback
      sessionUpdateDapp[cb.id] = cb
    }

    @JvmStatic
    fun sessionUpdateWallet(callback: (Sign.Model.SessionUpdateResponse) -> Unit) {
      val cb = Cancellable<Sign.Model.SessionUpdateResponse>()
      cb.store = sessionUpdateWallet
      cb.onSuccess = callback
      sessionUpdateWallet[cb.id] = cb
    }

    @JvmStatic
    fun sessionEventPublisher(callback: (Sign.Model.SessionEvent) -> Unit) {
      val cb = Cancellable<Sign.Model.SessionEvent>()
      cb.store = sessionEventPublishers
      cb.onSuccess = callback
      sessionEventPublishers[cb.id] = cb
    }

    @JvmStatic
    fun sessionExtendPublisher(callback: (Sign.Model.Session) -> Unit) {
      val cb = Cancellable<Sign.Model.Session>()
      cb.store = sessionExtendPublishers
      cb.onSuccess = callback
      sessionExtendPublishers[cb.id] = cb
    }

    @JvmStatic
    fun authRequestPublisher(callback: (Auth.Event.AuthRequest) -> Unit) {
      val cb = Cancellable<Auth.Event.AuthRequest>()
      cb.store = authRequestPublishers
      cb.onSuccess = callback
      authRequestPublishers[cb.id] = cb
    }

    @JvmStatic
    fun authResponsePublisher(callback: (Auth.Event.AuthResponse) -> Unit) {
      val cb = Cancellable<Auth.Event.AuthResponse>()
      cb.store = authResponsePublishers
      cb.onSuccess = callback
      authResponsePublishers[cb.id] = cb
    }

    @JvmStatic
    fun authSocketConnectionStatusPublisher(callback: (Auth.Event.ConnectionStateChange) -> Unit) {
      val cb = Cancellable<Auth.Event.ConnectionStateChange>()
      cb.store = authSocketConnectionStatusPublishers
      cb.onSuccess = callback
      authSocketConnectionStatusPublishers[cb.id] = cb
    }
  }


  object Numeric {

    fun containsHexPrefix(input: String): Boolean {
      return input.length > 1 && input[0] == '0' && input[1] == 'x'
    }

    fun cleanHexPrefix(input: String): String {
      return if (containsHexPrefix(input)) {
        input.substring(2)
      } else {
        input
      }
    }

    fun hexStringToByteArray(input: String): ByteArray {
      val cleanInput = cleanHexPrefix(input)

      val len = cleanInput.length

      if (len == 0) {
        return byteArrayOf()
      }

      val data: ByteArray
      val startIdx: Int
      if (len % 2 != 0) {
        data = ByteArray(len / 2 + 1)
        data[0] = Character.digit(cleanInput.get(0), 16).toByte()
        startIdx = 1
      } else {
        data = ByteArray(len / 2)
        startIdx = 0
      }

      var i = startIdx
      while (i < len) {
        data[(i + 1) / 2] =
          ((Character.digit(cleanInput.get(i), 16) shl 4) + Character.digit(
            cleanInput.get(i + 1),
            16
          )).toByte()
        i += 2
      }
      return data
    }

    fun toHexString(input: ByteArray?, offset: Int, length: Int, withPrefix: Boolean): String {
      val stringBuilder = StringBuilder()
      if (withPrefix) {
        stringBuilder.append("0x")
      }
      for (i in offset until offset + length) {
        stringBuilder.append(String.format("%02x", input!![i] and 0xFF.toByte()))
      }

      return stringBuilder.toString()
    }

    fun toHexString(input: ByteArray?): String {
      return toHexString(input, 0, input!!.size, true)
    }
  }
}
