package io.nstudio.plugins.persona

import androidx.activity.result.ActivityResultLauncher
import androidx.appcompat.app.AppCompatActivity
import com.google.gson.Gson
import com.withpersona.sdk2.inquiry.*

class NSCPersona private constructor(template: String?) {
  private var template: String? = null
  private var templateVersion: String? = null
  private var inquiry: String? = null
  private var inquiryInstance: Inquiry? = null

  private var accountId: String? = null
  private var referenceId: String? = null
  private var sessionToken: String? = null
  private var environment: Int? = null
  private var fields: Fields? = null

  var callback: Callback? = null
    set(value) {
      if (field != null && value == null) {
        callbacks.remove(field)
      }
      field = value

      if (value != null) {
        callbacks.add(value)
      }
    }

  interface Callback {
    fun onComplete(inquiryId: String, status: String, fields: String)
    fun onCancel(inquiryId: String?, sessionToken: String?)
    fun onError(error: String)
  }

  class FieldItem(var type: String = "unknown", var value: Any? = null)

  init {
    this.template = template
  }

  fun environment(value: Int?): NSCPersona {
    environment = value
    return this
  }

  fun accountId(id: String?): NSCPersona {
    accountId = id
    return this
  }

  fun referenceId(id: String?): NSCPersona {
    referenceId = id
    return this
  }

  fun sessionToken(token: String?): NSCPersona {
    sessionToken = token
    return this
  }

  fun fields(fields: HashMap<String, Any>): NSCPersona {
    val values = Fields.Builder()
    for (field in fields) {
      when (field.value) {
        is Boolean -> {
          values.field(field.key, field.value as Boolean)
        }
        is String -> {
          values.field(field.key, field.value as String)
        }
        is Int -> {
          values.field(field.key, field.value as Int)
        }
      }
    }

    if (fields.isNotEmpty()) {
      this.fields = values.build()
    }
    return this
  }

  fun fields(fields: Fields?): NSCPersona {
    this.fields = fields
    return this
  }

  fun build(): NSCPersona {
    if (inquiry != null) {
      inquiryInstance = Inquiry.fromInquiry(inquiry!!)
        .sessionToken(sessionToken)
        .build()
    } else if (template != null) {
      var builder = Inquiry.fromTemplate(template!!)
        .accountId(accountId)

      if (environment != null) {
        if (environment == 0) {
          builder.environment(Environment.SANDBOX)
        } else if (environment == 1) {
          builder = builder.environment(Environment.PRODUCTION)
        }
      }

      inquiryInstance = builder
        .fields(fields)
        .referenceId(referenceId).build()
    } else if (templateVersion != null) {

      var builder = Inquiry.fromTemplateVersion(templateVersion!!)
        .accountId(accountId)

      if (environment != null) {
        if (environment == 0) {
          builder.environment(Environment.SANDBOX)
        } else if (environment == 1) {
          builder = builder.environment(Environment.PRODUCTION)
        }
      }

      inquiryInstance = builder
        .fields(fields)
        .referenceId(referenceId)
        .build()
    }

    return this
  }

  fun start() {
    inquiryResult?.launch(inquiryInstance)
  }

  @Synchronized
  @Throws(Throwable::class)
  protected fun finalize() {
    if (callback != null) {
      callbacks.remove(callback)
    }
  }


  companion object {

    private var callbacks: ArrayList<Callback> = ArrayList()

    private val gson = Gson()

    private var inquiryResult: ActivityResultLauncher<Inquiry>? = null

    @JvmStatic
    fun init(activity: AppCompatActivity) {
      inquiryResult = activity.registerForActivityResult(
        Inquiry.Contract()
      ) { result ->

        when (result) {
          is InquiryResponse.Complete -> {
            val ret = HashMap<String, FieldItem>()
            for (field in result.fields) {
              when (val value = field.value) {
                is InquiryField.BooleanField -> {
                  ret[field.key] = FieldItem("boolean", value.value)
                }
                is InquiryField.DatetimeField -> {
                  ret[field.key] = FieldItem("date", value.value)
                }
                is InquiryField.DateField -> {
                  ret[field.key] = FieldItem("date", value.value)
                }
                is InquiryField.FloatField -> {
                  ret[field.key] = FieldItem("number", value.value)
                }
                is InquiryField.IntegerField -> {
                  ret[field.key] = FieldItem("number", value.value)
                }
                is InquiryField.StringField -> {
                  ret[field.key] = FieldItem("string", value.value)
                }
                is InquiryField.UnknownField -> {
                  ret[field.key] = FieldItem()
                }
              }
            }

            for (callback in callbacks) {
              callback.onComplete(result.inquiryId, result.status, gson.toJson(ret))
            }
          }
          is InquiryResponse.Cancel -> {
            for (callback in callbacks) {
              callback.onCancel(result.inquiryId, result.sessionToken)
            }
          }
          is InquiryResponse.Error -> {
            for (callback in callbacks) {
              callback.onError(result.debugMessage)
            }
          }
        }
      }

    }


    @JvmStatic
    fun fromTemplate(template: String): NSCPersona {
      return NSCPersona(template)
    }

    @JvmStatic
    fun fromTemplateVersion(template: String): NSCPersona {
      val persona = NSCPersona(null)
      persona.templateVersion = template
      return persona
    }

    @JvmStatic
    fun fromInquiry(inquiry: String): NSCPersona {
      val persona = NSCPersona(null)
      persona.inquiry = inquiry
      return persona
    }
  }
}
