package io.nstudio.nativescript.plugins.qrdemo

import android.graphics.BitmapFactory
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageView
import android.widget.LinearLayout
import io.nstudio.nativescript.plugins.qr.Qr

class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    val result = Qr.generateQr(
      "https://twitter.com/triniwiz",
      1000, 1000,
      "black", "white"
    )

    val view = findViewById<View>(R.id.container) as LinearLayout
    val imageView = ImageView(this)
    imageView.setImageBitmap(result)
    view.addView(imageView)
  }
}
