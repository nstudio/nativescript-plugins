package io.nstudio.plugins.appcues

import android.content.Context
import com.appcues.AppcuesConfig

class Appcues {
  companion object {
    @JvmOverloads
    @JvmStatic
    fun init(
      context: Context,
      accountId: String,
      applicationId: String,
      config: (AppcuesConfig.() -> Unit)? = null,
    ): com.appcues.Appcues {
      return com.appcues.Appcues(context, accountId, applicationId, config)
    }
  }

}