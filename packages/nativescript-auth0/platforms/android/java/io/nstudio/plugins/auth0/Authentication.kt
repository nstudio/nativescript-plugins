package io.nstudio.plugins.auth0

import com.auth0.android.authentication.AuthenticationException
import com.auth0.android.callback.Callback
import com.auth0.android.result.Credentials
import com.auth0.android.result.UserProfile

class Authentication(val authentication: com.auth0.android.authentication.AuthenticationAPIClient) {
  fun signup(
    email: String,
    password: String,
    username: String? = null,
    connection: String,
    userMetadata: Map<String, String>? = null,
    callback: (Credentials?, Exception?) -> Void
  ) {
    authentication.signUp(email, password, username, connection, userMetadata).start(object :
      Callback<Credentials, AuthenticationException> {
      override fun onFailure(error: AuthenticationException) {
        callback(null, error)
      }

      override fun onSuccess(result: Credentials) {
        callback(result, null)
      }
    })
  }

  fun revoke(refreshToken: String, headers: Map<String, String>?, callback: (Exception?) -> Void) {
    val request = authentication.revokeToken(refreshToken)
    headers?.let {
      for ((key, value) in it) {
        request.addHeader(key, value)
      }
    }
    request.start(object : Callback<Void?, AuthenticationException> {
      override fun onFailure(error: AuthenticationException) {
        callback(error)
      }

      override fun onSuccess(result: Void?) {
        callback(null)
      }
    })
  }

  fun userInfo(
    token: String,
    headers: Map<String, String>?,
    callback: (UserProfile?, Exception?) -> Void
  ) {
    val request = authentication.userInfo(token)
    headers?.let {
      for ((key, value) in it) {
        request.addHeader(key, value)
      }
    }
    request.start(object : Callback<UserProfile, AuthenticationException> {
      override fun onFailure(error: AuthenticationException) {
        callback(null, error)
      }

      override fun onSuccess(result: UserProfile) {
        callback(result, null)
      }
    })
  }

  fun refreshToken(
    refreshToken: String,
    scope: String?,
    audience: String?,
    headers: Map<String, String>?,
    callback: (Credentials?, Exception?) -> Void
  ) {
    val request = authentication.renewAuth(refreshToken, audience, scope)
    headers?.let {
      for ((key, value) in it) {
        request.addHeader(key, value)
      }
    }
    request.start(object : Callback<Credentials, AuthenticationException> {
      override fun onFailure(error: AuthenticationException) {
        callback(null, error)
      }

      override fun onSuccess(result: Credentials) {
        callback(result, null)
      }
    })
  }
}
