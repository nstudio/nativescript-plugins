package io.nstudio.plugins.walletconnect
import java.security.MessageDigest
import java.security.NoSuchAlgorithmException
import com.trustwallet.walletconnect.extensions.toHex
import com.trustwallet.walletconnect.models.session.WCSession

fun String.decodeHex(): ByteArray {
    check(length % 2 == 0) { "Must have an even length" }

    return removePrefix("0x")
      .chunked(2)
      .map { it.toInt(16).toByte() }
      .toByteArray()
  }

class Utils {

  interface Callback<T> {
    fun onSuccess(response: T)
  }

  companion object {

    init {
      System.loadLibrary("TrustWalletCore")
    }

       @JvmStatic
    fun toHexString(byteArray: ByteArray): String{
      return byteArray.toHex()
    }

    @JvmStatic
    fun createEthSigningSignature(text: String): ByteArray {
      val buf = text.decodeHex()
      val prefix = "\\u{19}Ethereum Signed Message:\n\\($buf)".encodeToByteArray()
      return prefix + buf
    }


    private var digest: MessageDigest? = null

    @JvmStatic
    fun createSession(uri: String): WCSession?{
      return WCSession.from(uri)
    }

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


  fun String.decodeHex(): ByteArray {
    check(length % 2 == 0) { "Must have an even length" }

    return removePrefix("0x")
      .chunked(2)
      .map { it.toInt(16).toByte() }
      .toByteArray()
  }
}
