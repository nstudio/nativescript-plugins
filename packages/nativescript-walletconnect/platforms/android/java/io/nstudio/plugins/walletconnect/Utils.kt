package io.nstudio.plugins.walletconnect

import com.squareup.moshi.Moshi
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import org.komputing.khex.extensions.toNoPrefixHexString
import org.walletconnect.Session
import org.walletconnect.impls.WCSession
import org.walletconnect.impls.WCSessionStore
import java.security.MessageDigest
import java.security.NoSuchAlgorithmException
import java.util.*


class Utils {
  
  interface Callback<T> {
    fun onSuccess(response: T)
  }

  companion object {
    @JvmStatic
    fun createMoshiInstance(): Moshi {
      return Moshi.Builder()
        .addLast(KotlinJsonAdapterFactory())
        .build()
    }

    @JvmStatic
    fun createWCSession(
      config: Session.FullyQualifiedConfig,
      payloadAdapter: Session.PayloadAdapter,
      sessionStore: WCSessionStore,
      transportBuilder: Session.Transport.Builder,
      clientMeta: Session.PeerMeta,
      clientId: String?
    ): WCSession {
      return WCSession(
        config, payloadAdapter, sessionStore, transportBuilder, clientMeta, clientId
      )
    }

    @JvmStatic
    fun createRandomKey(
      size: Int
    ): String {
      return ByteArray(size).also { Random().nextBytes(it) }.toNoPrefixHexString()
    }

    @JvmStatic
    fun createConfigFromWCUri(
      uri: String
    ): Session.Config {
      return Session.Config.fromWCUri(uri)
    }
    
    @JvmStatic
    fun signMessage(
      session: WCSession,
      id: Long,
      address: String,
      message: String,
      callback: Callback<Session.MethodCall.Response>
    ){
      return session.performMethodCall(
        Session.MethodCall.SignMessage(id, address, message)
      ) { resp ->
        callback.onSuccess(resp)
      }
    }
    
    private var digest: MessageDigest? = null
    
    @JvmStatic
    fun md5(s: String): String {
      try {
        if(digest == null){
          digest = MessageDigest.getInstance("MD5")
        }
        digest?.let {digest ->
          digest.update(s.toByteArray())
          val messageDigest = digest.digest()
          
          val hexString = StringBuffer()
          for (i in messageDigest.indices) hexString.append(
            Integer.toHexString(
              0xFF and messageDigest[i]
                .toInt()
            )
          )
          return hexString.toString()
        }
      } catch (e: NoSuchAlgorithmException) {}
      return ""
    }


    @JvmStatic
    fun sha256(s: String): String {
      try {
        if(digest == null){
          digest = MessageDigest.getInstance("SHA-256")
        }
        digest?.let {digest ->
          digest.update(s.toByteArray())
          val messageDigest = digest.digest()
          
          val hexString = StringBuffer()
          for (i in messageDigest.indices) hexString.append(
            Integer.toHexString(
              0xFF and messageDigest[i]
                .toInt()
            )
          )
          return hexString.toString()
        }
      } catch (e: NoSuchAlgorithmException) {}
      return ""
    }

    @JvmStatic
    fun sha512(s: String): String {
      try {
        if(digest == null){
          digest = MessageDigest.getInstance("SHA-512")
        }
        digest?.let {digest ->
          digest.update(s.toByteArray())
          val messageDigest = digest.digest()
          
          val hexString = StringBuffer()
          for (i in messageDigest.indices) hexString.append(
            Integer.toHexString(
              0xFF and messageDigest[i]
                .toInt()
            )
          )
          return hexString.toString()
        }
      } catch (e: NoSuchAlgorithmException) {}
      return ""
    }


    @JvmStatic
    fun toHex(str: String): String {
      val stringBuilder = StringBuilder()
      val charArray = str.toCharArray()
      for (c in charArray) {
        val charToHex = Integer.toHexString(c.code)
        stringBuilder.append(charToHex)
      }
      return stringBuilder.toString()
    }

    @JvmStatic
    fun mapToList(vararg map: Any): List<*> {
      return map.toList()
    }
  }
}
