package io.nstudio.plugins.auth0


import android.content.Context
import com.auth0.android.authentication.AuthenticationAPIClient
import com.auth0.android.result.Credentials
import java.util.Date

class Auth0(val auth0: com.auth0.android.Auth0) {
  fun authentication(): Authentication {
    return Authentication(AuthenticationAPIClient(auth0))
  }

  fun webAuth(): WebAuth {
    return WebAuth(auth0)
  }


  companion object {
    @JvmStatic
    fun getInstance(context: Context): Auth0 {
      return Auth0(com.auth0.android.Auth0.getInstance(context))
    }

    @JvmStatic
    fun authentication(context: Context): Authentication {
      return Authentication(AuthenticationAPIClient(com.auth0.android.Auth0.getInstance(context)))
    }

    @JvmStatic
    fun authentication(clientId: String, domain: String): Authentication {
      return Authentication(
        AuthenticationAPIClient(
          com.auth0.android.Auth0.getInstance(
            clientId,
            domain
          )
        )
      )
    }

    @JvmStatic
    fun credentialsManager(context: Context, authentication: Authentication): CredentialsManager {
      val storage = com.auth0.android.authentication.storage.SharedPreferencesStorage(context)
      return CredentialsManager(
        com.auth0.android.authentication.storage.CredentialsManager(
          authentication.authentication,
          storage
        )
      )
    }

    @JvmStatic
    fun webAuth(context: Context): WebAuth {
      return WebAuth(com.auth0.android.Auth0.getInstance(context))
    }

    @JvmStatic
    fun webAuth(clientId: String, domain: String): WebAuth {
      return WebAuth(
        com.auth0.android.Auth0.getInstance(
          clientId,
          domain
        )
      )
    }

    @JvmStatic
    fun decodeJWT(token: String): DecodedJWT {
      return DecodedJWT(token)
    }

    @JvmStatic
    fun createCredentials(
      accessToken: String?,
      tokenType: String?,
      idToken: String?,
      refreshToken: String?,
      expiresIn: Long,
      scope: String?,
      recoveryCode: String
    ): Credentials {
      val credentials = Credentials(
        idToken ?: "",
        accessToken ?: "",
        tokenType ?: "",
        refreshToken,
        Date(expiresIn),
        scope
      )

      val field = credentials::class.java.getDeclaredField("recoveryCode")
      field.isAccessible = true
      field.set(credentials, recoveryCode)

      return credentials
    }
  }
}
