package io.nstudio.plugins.auth0

import android.content.Context
import com.auth0.android.authentication.AuthenticationException
import com.auth0.android.callback.Callback
import com.auth0.android.provider.WebAuthProvider
import com.auth0.android.result.Credentials

class WebAuth(val auth0: com.auth0.android.Auth0) {

  fun start(
    context: Context,
    scheme: String?,
    scope: String?,
    audience: String?,
    redirectUrl: String?,
    callback: (Credentials?, Exception?) -> Void
  ) {
    val login =
      WebAuthProvider.login(auth0)

    redirectUrl?.let {
      login.withRedirectUri(it)
    }

    scheme?.let {
      login.withScheme(it)
    }

    scope?.let {
      login.withScope(it)
    }

    audience?.let {
      login.withAudience(audience)
    }

    login.start(context, object : Callback<Credentials, AuthenticationException> {
      override fun onFailure(error: AuthenticationException) {
        callback(null, error)
      }

      override fun onSuccess(result: Credentials) {
        callback(result, null)
      }
    })
  }

  fun clearSession(
    context: Context,
    scheme: String?,
    federated: Boolean,
    returnToUrl: String?,
    callback: (Credentials?, Exception?) -> Void
  ) {
    val logout = WebAuthProvider.logout(auth0)

    scheme?.let {
      logout.withScheme(it)
    }

    returnToUrl?.let {
      logout.withReturnToUrl(it)
    }

    if (federated) {
      logout.withFederated()
    }

    logout.start(context, object : Callback<Void?, AuthenticationException> {
      override fun onFailure(error: AuthenticationException) {
        callback(null, error)
      }

      override fun onSuccess(result: Void?) {
        callback(null, null)
      }
    })
  }
}
