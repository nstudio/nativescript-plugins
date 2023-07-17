package io.nstudio.plugins.appcues

import android.content.Context
import com.appcues.AppcuesConfig
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class Appcues {
  companion object {

    private val mainScope = CoroutineScope(Dispatchers.Main)

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


    @JvmStatic
    fun show(
      appcues: com.appcues.Appcues,
      experienceId: String,
      callback: (Boolean) -> Unit
    ) {
      mainScope.launch {
        val showed = appcues.show(experienceId)
        callback(showed)
      }
    }
  }

}
