package io.nstudio.plugins.auth0

import com.auth0.android.authentication.storage.CredentialsManagerException
import com.auth0.android.callback.Callback
import com.auth0.android.result.Credentials
import com.auth0.android.result.UserProfile


class CredentialsManager(val credentialsManager: com.auth0.android.authentication.storage.CredentialsManager) {

  fun credentials(
    scope: String?,
    minTtl: Int = 0,
    parameters: Map<String, String> = mapOf(),
    forceRefresh: Boolean = false,
    callback: (Credentials?, Exception?) -> Void
  ) {
    credentialsManager.getCredentials(scope, minTtl, parameters, forceRefresh, object :
      Callback<Credentials, CredentialsManagerException> {
      override fun onFailure(error: CredentialsManagerException) {
        callback(null, error)
      }

      override fun onSuccess(result: Credentials) {
        callback(result, null)
      }
    })
  }

  fun hasValid(minTtL: Long = 0): Boolean {
    return credentialsManager.hasValidCredentials(minTtL)
  }

  fun user(callback: (UserProfile?, Exception?) -> Void) {
    credentialsManager.getCredentials(object : Callback<Credentials, CredentialsManagerException> {
      override fun onFailure(error: CredentialsManagerException) {
        callback(null, error)
      }

      override fun onSuccess(result: Credentials) {
        callback(result.user, null)
      }
    })
  }

  fun clear(): Boolean {
    credentialsManager.clearCredentials()
    return true
  }

  fun store(credentials: Credentials): Boolean {
    try {
      credentialsManager.saveCredentials(credentials)
      return true
    } catch (e: Exception) {
      return false
    }
  }

  fun canRenew(): Boolean {
    return credentialsManager.hasValidCredentials()
  }
}
