package io.nstudio.plugins.walletconnect

import android.app.Application
import com.walletconnect.android.Core
import com.walletconnect.android.CoreClient
import com.walletconnect.android.relay.ConnectionType
import com.walletconnect.auth.client.Auth
import com.walletconnect.auth.client.AuthClient
import com.walletconnect.sign.client.Sign
import com.walletconnect.sign.client.SignClient
import java.util.UUID

import java.util.WeakHashMap


class NSCWalletConnectV2 {

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

    private val sessionUpdatePublishers: WeakHashMap<String, Cancellable<Sign.Model.UpdatedSession>> =
      WeakHashMap()

    private val sessionEventPublishers: WeakHashMap<String, Cancellable<Sign.Model.SessionEvent>> =
      WeakHashMap()

    private val sessionExtendPublishers: WeakHashMap<String, Cancellable<Sign.Model.Session>> =
      WeakHashMap()


    private val authRequestPublishers: WeakHashMap<String, Cancellable<Auth.Event.AuthRequest>> =
      WeakHashMap()

    private val authResponsePublishers: WeakHashMap<String, Cancellable<Auth.Event.AuthResponse>> =
      WeakHashMap()


    private val authSocketConnectionStatusPublishers: WeakHashMap<String, Cancellable<Auth.Event.ConnectionStateChange>> =
      WeakHashMap()


    private val clientCoreDelegate = object : CoreClient.CoreDelegate {
      override fun onPairingDelete(deletedPairing: Core.Model.DeletedPairing) {
        TODO("Not yet implemented")
      }
    }

    private val signInWalletDelegate = object : SignClient.WalletDelegate {
      override fun onConnectionStateChange(state: Sign.Model.ConnectionState) {
        signSocketConnectionStatusPublishers.forEach {
          it.value.onSuccess(ConnectionStatus.fromState(state))
        }
      }

      override fun onError(error: Sign.Model.Error) {
        TODO("Not yet implemented")
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

      }
    }

    private val signInDappDelegate = object : SignClient.DappDelegate {
      override fun onConnectionStateChange(state: Sign.Model.ConnectionState) {
        signSocketConnectionStatusPublishers.forEach {
          it.value.onSuccess(ConnectionStatus.fromState(state))
        }
      }

      override fun onError(error: Sign.Model.Error) {
        TODO("Not yet implemented")
      }

      override fun onSessionApproved(approvedSession: Sign.Model.ApprovedSession) {

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
        sessionUpdatePublishers.forEach {
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

          TODO("Not yet implemented")
        }
      }

    init {
      CoreClient.setDelegate(clientCoreDelegate)
      SignClient.setWalletDelegate(signInWalletDelegate)
      SignClient.setDappDelegate(signInDappDelegate)
      AuthClient.setResponderDelegate(authRequesterResponderDelegate)
      AuthClient.setRequesterDelegate(authRequesterResponderDelegate)
    }

    @JvmStatic
    @JvmOverloads
    fun initialize(
      projectId: String,
      relayUrl: String = "relay.walletconnect.com",
      meta: Core.Model.AppMetaData,
      socketConnectionType: ConnectionType,
      application: Application
    ) {
      val url = "wss://$relayUrl?projectId=${projectId}"
      CoreClient.initialize(meta, url, socketConnectionType, application, null) {
        TODO()
      }
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
    fun pairCreate(callback: (String?, Throwable?) -> Unit) {
      var error: Throwable? = null
      val pair = CoreClient.Pairing.create {
        error = it.throwable
      }
      callback(pair?.uri, error)
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
    fun sessionUpdatePublisher(callback: (Sign.Model.UpdatedSession) -> Unit) {
      val cb = Cancellable<Sign.Model.UpdatedSession>()
      cb.store = sessionUpdatePublishers
      cb.onSuccess = callback
      sessionUpdatePublishers[cb.id] = cb
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
}
