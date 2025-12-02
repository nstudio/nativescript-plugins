package io.nstudio.plugins.auth0

import android.util.Base64
import android.util.Log
import androidx.annotation.VisibleForTesting
import com.auth0.android.result.Credentials
import com.auth0.android.result.UserIdentity
import com.auth0.android.result.UserProfile
import com.google.gson.Gson
import com.google.gson.GsonBuilder
import com.google.gson.JsonDeserializationContext
import com.google.gson.JsonDeserializer
import com.google.gson.JsonElement
import com.google.gson.JsonParseException
import com.google.gson.TypeAdapter
import com.google.gson.TypeAdapterFactory
import com.google.gson.reflect.TypeToken
import com.google.gson.stream.JsonReader
import com.google.gson.stream.JsonWriter
import java.io.IOException
import java.lang.reflect.Field
import java.lang.reflect.Type
import java.math.BigInteger
import java.security.KeyFactory
import java.security.NoSuchAlgorithmException
import java.security.PublicKey
import java.security.spec.InvalidKeySpecException
import java.security.spec.RSAPublicKeySpec
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

// Copy of com.auth0.android.request.internal.Jwt
class DecodedJWT(token: String) {
  internal class JwksDeserializer : JsonDeserializer<Map<String, PublicKey>> {
    @Throws(JsonParseException::class)
    override fun deserialize(
      json: JsonElement,
      typeOfT: Type,
      context: JsonDeserializationContext
    ): Map<String, PublicKey> {
      if (!json.isJsonObject || json.isJsonNull || json.asJsonObject.entrySet().isEmpty()) {
        throw JsonParseException("jwks json must be a valid and non-empty json object")
      }
      val jwks = mutableMapOf<String, PublicKey>()
      val keys = json.asJsonObject.getAsJsonArray("keys")
      for (k in keys) {
        val currentKey = k.asJsonObject
        val keyAlg = context.deserialize<String>(currentKey["alg"], String::class.java)
        val keyUse = context.deserialize<String>(currentKey["use"], String::class.java)
        if (RSA_ALGORITHM != keyAlg || USE_SIGNING != keyUse) {
          //Key not supported at this time
          continue
        }
        val keyType = context.deserialize<String>(currentKey["kty"], String::class.java)
        val keyId = context.deserialize<String>(currentKey["kid"], String::class.java)
        val keyModulus = context.deserialize<String>(currentKey["n"], String::class.java)
        val keyPublicExponent = context.deserialize<String>(currentKey["e"], String::class.java)
        try {
          val kf = KeyFactory.getInstance(keyType)
          val modulus = BigInteger(
            1,
            Base64.decode(
              keyModulus,
              Base64.URL_SAFE or Base64.NO_PADDING or Base64.NO_WRAP
            )
          )
          val exponent = BigInteger(
            1,
            Base64.decode(
              keyPublicExponent,
              Base64.URL_SAFE or Base64.NO_PADDING or Base64.NO_WRAP
            )
          )
          val pub = kf.generatePublic(RSAPublicKeySpec(modulus, exponent))
          jwks[keyId] = pub
        } catch (e: NoSuchAlgorithmException) {
          Log.e(
            JwksDeserializer::class.java.simpleName,
            "Could not parse the JWK with ID $keyId",
            e
          )
          //Would result in an empty key set
        } catch (e: InvalidKeySpecException) {
          Log.e(
            JwksDeserializer::class.java.simpleName,
            "Could not parse the JWK with ID $keyId",
            e
          )
        }
      }
      return jwks.toMap()
    }

    companion object {
      private const val RSA_ALGORITHM = "RS256"
      private const val USE_SIGNING = "sig"
    }
  }

  internal open class CredentialsDeserializer : JsonDeserializer<Credentials> {
    @Throws(JsonParseException::class)
    override fun deserialize(
      json: JsonElement,
      typeOfT: Type,
      context: JsonDeserializationContext
    ): Credentials {
      if (!json.isJsonObject || json.isJsonNull || json.asJsonObject.entrySet().isEmpty()) {
        throw JsonParseException("credentials json is not a valid json object")
      }
      val jsonObject = json.asJsonObject
      val idToken = context.deserialize<String>(jsonObject.remove("id_token"), String::class.java)
      val accessToken =
        context.deserialize<String>(jsonObject.remove("access_token"), String::class.java)
      val type = context.deserialize<String>(jsonObject.remove("token_type"), String::class.java)
      val refreshToken =
        context.deserialize<String>(jsonObject.remove("refresh_token"), String::class.java)
      val expiresIn = context.deserialize<Long>(jsonObject.remove("expires_in"), Long::class.java)
      val scope = context.deserialize<String>(jsonObject.remove("scope"), String::class.java)
      val recoveryCode =
        context.deserialize<String>(jsonObject.remove("recovery_code"), String::class.java)
      var expiresAt = context.deserialize<Date>(jsonObject.remove("expires_at"), Date::class.java)
      if (expiresAt == null && expiresIn != null) {
        expiresAt = Date(currentTimeInMillis + expiresIn * 1000)
      }
      return createCredentials(
        idToken,
        accessToken,
        type,
        refreshToken,
        expiresAt,
        scope,
        recoveryCode
      )
    }

    @get:VisibleForTesting
    open val currentTimeInMillis: Long
      get() = System.currentTimeMillis()

    @VisibleForTesting
    open fun createCredentials(
      idToken: String,
      accessToken: String,
      type: String,
      refreshToken: String?,
      expiresAt: Date,
      scope: String?,
      recoveryCode: String?
    ): Credentials {
      val credentials = Credentials(
        idToken, accessToken, type, refreshToken, expiresAt, scope
      )
      val field = credentials::class.java.getDeclaredField("recoveryCode")
      field.isAccessible = true
      field.set(credentials, recoveryCode)
      return credentials
    }
  }

  internal class UserProfileDeserializer : JsonDeserializer<UserProfile> {
    private val iso8601DateGson = Gson()

    @Throws(JsonParseException::class)
    override fun deserialize(
      json: JsonElement,
      typeOfT: Type,
      context: JsonDeserializationContext
    ): UserProfile {
      if (!json.isJsonObject || json.isJsonNull || json.asJsonObject.entrySet().isEmpty()) {
        throw JsonParseException("user profile json is not a valid json object")
      }

      val `object` = json.asJsonObject
      val id = context.deserialize<String>(
        `object`.remove("user_id"),
        String::class.java
      )
      val name = context.deserialize<String>(`object`.remove("name"), String::class.java)
      val nickname = context.deserialize<String>(
        `object`.remove("nickname"),
        String::class.java
      )
      val picture = context.deserialize<String>(
        `object`.remove("picture"),
        String::class.java
      )

      val email = context.deserialize<String>(
        `object`.remove("email"),
        String::class.java
      )
      val givenName = context.deserialize<String>(
        `object`.remove("given_name"),
        String::class.java
      )
      val familyName = context.deserialize<String>(
        `object`.remove("family_name"),
        String::class.java
      )
      val emailVerified = if (`object`.has("email_verified")) context.deserialize(
        `object`.remove("email_verified"),
        Boolean::class.java
      ) else false
      val createdAt = iso8601DateGson.fromJson(
        `object`.remove("created_at"),
        Date::class.java
      )

      val identitiesType = object : TypeToken<List<UserIdentity?>?>() {}.type
      val identities =
        context.deserialize<List<UserIdentity>>(`object`.remove("identities"), identitiesType)

      val metadataType = object : TypeToken<Map<String?, Any?>?>() {}.type
      val userMetadata =
        context.deserialize<Map<String, Any>>(`object`.remove("user_metadata"), metadataType)
      val appMetadata =
        context.deserialize<Map<String, Any>>(`object`.remove("app_metadata"), metadataType)
      val extraInfo = context.deserialize<Map<String, Any>>(`object`, metadataType)
      return UserProfile(
        id,
        name,
        nickname,
        picture,
        email,
        emailVerified,
        familyName,
        createdAt,
        identities,
        extraInfo,
        userMetadata,
        appMetadata,
        givenName
      )
    }
  }

  @Retention(AnnotationRetention.RUNTIME)
  @Target(AnnotationTarget.FIELD)
  internal annotation class JsonRequired


  internal class JsonRequiredTypeAdapterFactory : TypeAdapterFactory {
    override fun <T> create(gson: Gson, type: TypeToken<T>): TypeAdapter<T> {
      val delegate = gson.getDelegateAdapter(this, type)

      return object : TypeAdapter<T>() {
        @Throws(IOException::class)
        override fun write(out: JsonWriter, value: T) {
          delegate.write(out, value)
        }

        @Throws(IOException::class)
        override fun read(`in`: JsonReader): T {
          val pojo = delegate.read(`in`)

          pojo?.let { pojo ->
            val fields: Array<Field> = pojo::class.java.declaredFields
            for (f in fields) {
              if (f.getAnnotation(
                  JsonRequired::class.java
                ) != null
              ) {
                try {
                  f.isAccessible = true
                  if (f[pojo] == null) {
                    throw JsonParseException(String.format("Missing required attribute %s", f.name))
                  }
                } catch (ex: IllegalAccessException) {
                  throw JsonParseException(String.format("Missing required attribute %s", f.name))
                }
              }
            }
          }
          return pojo
        }
      }.nullSafe()
    }
  }


  internal object GsonProvider {
    internal val gson: Gson
    private var sdf: SimpleDateFormat
    private const val DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"

    init {
      val jwksType = TypeToken.getParameterized(
        Map::class.java,
        String::class.java,
        PublicKey::class.java
      ).type
      gson = GsonBuilder()
        .registerTypeAdapterFactory(JsonRequiredTypeAdapterFactory())
        .registerTypeAdapter(UserProfile::class.java, UserProfileDeserializer())
        .registerTypeAdapter(Credentials::class.java, CredentialsDeserializer())
        .registerTypeAdapter(jwksType, JwksDeserializer())
        .setDateFormat(DATE_FORMAT)
        .create()
      sdf = SimpleDateFormat(DATE_FORMAT, Locale.US)
    }

    @JvmStatic
    @VisibleForTesting
    fun formatDate(date: Date): String {
      return sdf.format(date)
    }
  }

  private val decodedHeader: Map<String, Any>
  private val decodedPayload: Map<String, Any>
  val parts: Array<String>

  // header
  val algorithm: String
  val keyId: String?

  // payload
  val subject: String?
  val issuer: String?
  val nonce: String?
  val organizationId: String?
  val organizationName: String?
  val issuedAt: Date?
  val expiresAt: Date?
  val authorizedParty: String?
  val authenticationTime: Date?
  val audience: List<String>
  val notBefore: Date?
  val identifier: String?
  val body: Map<String, Any>

  init {
    parts = splitToken(token)
    val jsonHeader = decodeBase64(parts[0])
    val jsonPayload = decodeBase64(parts[1])
    val mapAdapter = GsonProvider.gson.getAdapter(object : TypeToken<Map<String, Any>>() {})
    decodedHeader = mapAdapter.fromJson(jsonHeader)
    decodedPayload = mapAdapter.fromJson(jsonPayload)
    body = decodedPayload

    // header claims
    algorithm = decodedHeader["alg"] as String
    keyId = decodedHeader["kid"] as String?

    // payload claims
    subject = decodedPayload["sub"] as String?
    issuer = decodedPayload["iss"] as String?
    nonce = decodedPayload["nonce"] as String?
    identifier = decodedPayload["jti"] as String?

    notBefore = (decodedPayload["nbf"] as? Double)?.let { Date(it.toLong() * 1000) }

    organizationId = decodedPayload["org_id"] as String?
    organizationName = decodedPayload["org_name"] as String?
    issuedAt = (decodedPayload["iat"] as? Double)?.let { Date(it.toLong() * 1000) }
    expiresAt = (decodedPayload["exp"] as? Double)?.let { Date(it.toLong() * 1000) }
    authorizedParty = decodedPayload["azp"] as String?
    authenticationTime =
      (decodedPayload["auth_time"] as? Double)?.let { Date(it.toLong() * 1000) }
    audience = when (val aud = decodedPayload["aud"]) {
      is String -> listOf(aud)
      is List<*> -> aud as List<String>
      else -> emptyList()
    }
  }

  companion object {
    fun splitToken(token: String): Array<String> {
      var parts = token.split(".").toTypedArray()
      if (parts.size == 2 && token.endsWith(".")) {
        // Tokens with alg='none' have empty String as Signature.
        parts = arrayOf(parts[0], parts[1], "")
      }
      if (parts.size != 3) {
        throw IllegalArgumentException(
          String.format(
            "The token was expected to have 3 parts, but got %s.",
            parts.size
          )
        )
      }
      return parts
    }

    fun decodeBase64(encoded: String): String {
      val bytes: ByteArray =
        Base64.decode(encoded, Base64.URL_SAFE or Base64.NO_WRAP or Base64.NO_PADDING)
      return String(bytes, Charsets.UTF_8)
    }
  }
}
