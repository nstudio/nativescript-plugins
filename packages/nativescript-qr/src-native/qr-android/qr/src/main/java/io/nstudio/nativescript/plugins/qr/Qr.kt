package io.nstudio.nativescript.plugins.qr

import android.graphics.Bitmap

class Qr {
  companion object {
    init {
      System.loadLibrary("qrnative")
    }

    @JvmStatic
    fun generateQr(
      value: String,
      width: Int,
      height: Int,
      color: String,
      backgroundColor: String
    ): Bitmap? {
      val bm = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
      nativeGenerateQRWithBytes(
        value.toByteArray(),
        bm,
        width, height, color, backgroundColor
      )
      return bm
    }


    @JvmStatic
    fun generateQrWithBytes(
      bytes: ByteArray,
      width: Int,
      height: Int,
      color: String,
      backgroundColor: String
    ): Bitmap? {
      val bm = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
      nativeGenerateQRWithBytes(
        bytes,
        bm,
        width,
        height,
        color,
        backgroundColor
      )
      return bm
    }

    @JvmStatic
    external fun nativeGenerateQRWithBytes(
      bytes: ByteArray,
      bitmap: Bitmap,
      width: Int,
      height: Int,
      color: String,
      backgroundColor: String
    )
  }
}
