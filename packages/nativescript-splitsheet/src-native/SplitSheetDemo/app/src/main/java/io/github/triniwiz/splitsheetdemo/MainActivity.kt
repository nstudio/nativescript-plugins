package io.github.triniwiz.splitsheetdemo


import android.graphics.BitmapFactory
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.util.Log
import android.view.View
import android.widget.ImageView
import java.net.URL
import java.util.concurrent.Executors
import io.github.triniwiz.splitsheet.SplitSheet

class MainActivity : AppCompatActivity() {
    lateinit var imageView: ImageView
    lateinit var splitsheet: SplitSheet
    private val executor = Executors.newSingleThreadExecutor()
    private val handler = Handler(Looper.getMainLooper())

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        val metrics = resources.displayMetrics
        setContentView(R.layout.activity_main)
        imageView = findViewById(R.id.imageView)
        splitsheet = findViewById(R.id.splitSheet)
      //  splitsheet.mainViewBackgroundColor = Color.TRANSPARENT
        splitsheet.mainViewElevation = false
        splitsheet.displaceContent = false
        splitsheet.showHandle = false
        splitsheet.closedSheetHeight = 50F
        splitsheet.minimumSheetHeight = 200F


        splitsheet.eventListener = object : SplitSheet.Events {
            override fun event(name: String, value: Any?) {
                Log.d("MainActivity", "event: $name $value")
            }
        }
//        executor.execute {
//            try {
//                val url =
//                    URL("https://picsum.photos/${metrics.widthPixels}/${metrics.heightPixels}")
//                val bm = BitmapFactory.decodeStream(url.openStream())
//                runOnUiThread {
//                    imageView.setImageBitmap(bm)
//                }
//            } catch (e: Exception) {
//                e.printStackTrace()
//            }
//        }
    }

    fun toggleContent(view: View) {
        splitsheet.show(!splitsheet.showing)
    }

    fun toggleCollapse(view: View) {
        splitsheet.displaceContent = !splitsheet.displaceContent
    }

    fun toggleHandle(view: View) {
        splitsheet.showHandle = !splitsheet.showHandle
    }

    fun toggleScroll(view: View) {
        splitsheet.isScrollEnabled = !splitsheet.isScrollEnabled
    }
}
