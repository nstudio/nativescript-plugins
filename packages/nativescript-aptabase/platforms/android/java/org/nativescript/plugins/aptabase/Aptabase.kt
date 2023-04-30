package org.nativescript.plugins.aptabase

import android.os.Build
import android.content.Context
import java.io.BufferedWriter
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL
import java.text.SimpleDateFormat
import java.util.*
import java.util.concurrent.TimeUnit
import kotlin.concurrent.thread
import org.json.JSONObject

class Aptabase private constructor() {
  private val SDK_VERSION = "aptabase-kotlin@0.0.1"

  // Session expires after 1 hour of inactivity
  private val SESSION_TIMEOUT: Long = TimeUnit.HOURS.toMillis(1)
  private var appKey: String? = null
  private var sessionId = UUID.randomUUID()
  private var env: EnvironmentInfo? = null
  private var lastTouched = Date()
  private var apiURL: String? = null

  private val regions =
    mapOf(
      "US" to "https://us.aptabase.com",
      "EU" to "https://eu.aptabase.com",
      "DEV" to "http://localhost:3000"
    )

  fun initialize(appKey: String, context: Context) {
    val parts = appKey.split("-")
    if (parts.size != 3) {
      println("The Aptabase App Key $appKey is invalid. Tracking will be disabled.")
      return
    }

    val region = parts[1]
    val baseURL = regions[region] ?: regions["DEV"]!!

    apiURL = "$baseURL/api/v0/event"
    this.appKey = appKey
    env = EnvironmentInfo.get(context)
  }

  fun trackEvent(eventName: String, props: Map<String, Any> = emptyMap<String, Any>()) {
    appKey?.let { appKey ->
      env?.let { env ->
        apiURL?.let { apiURL ->
          val now = Date()
          if (now.time - lastTouched.time > SESSION_TIMEOUT) {
            sessionId = UUID.randomUUID()
          }

          lastTouched = now

          val body: JSONObject = JSONObject(
            mapOf(
              "timestamp" to dateFormatter.format(Date()),
              "sessionId" to sessionId.toString().lowercase(),
              "eventName" to eventName,
              "systemProps" to mapOf(
                "osName" to "Android",
                "osVersion" to Build.VERSION.RELEASE,
                "locale" to env.locale,
                "appVersion" to env.appVersion,
                "appBuildNumber" to env.appBuildNumber,
                "sdkVersion" to SDK_VERSION
              ),
              "props" to props
            )
          )

          thread {
            val url = URL(apiURL)
            (url.openConnection() as? HttpURLConnection)?.apply {
              requestMethod = "POST"
              setRequestProperty("App-Key", appKey)
              setRequestProperty("Content-Type", "application/json")

              doOutput = true
              BufferedWriter(OutputStreamWriter(outputStream)).use { writer ->
                writer.write(body.toString())
              }

              val responseCode = responseCode
              if (responseCode >= 300) {
                println(
                  "trackEvent failed with status code $responseCode: ${inputStream.bufferedReader().use { it.readText() }}"
                )
              }

              disconnect()
            }
          }
        }
      }
    }
  }

  private val dateFormatter: SimpleDateFormat
    get() {
      val formatter = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'", Locale.US)
      formatter.timeZone = TimeZone.getTimeZone("UTC")
      return formatter
    }

  companion object {
    val shared = Aptabase()
  }
}
