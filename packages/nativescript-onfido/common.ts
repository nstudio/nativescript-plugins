import { Http, Observable } from '@nativescript/core';

export interface IOnfidoConfigOptions {
  showWelcome?: boolean;
  faceVerify?: boolean;
  documentVerify?: 'any'|'driving_license'|'generic'|'national_identity_card'|'passport'|'residence_permit'|'visa'|'work_permit';
  country?: string; // required if using any document type other than any.
}

export class OnfidoCommon extends Observable {

  static apiToken: string;
  static applicantId: string;
  static applicationId: string;
  static sdkToken: string;

  static init(token, applicationId) {
    this.apiToken = token;
    this.applicationId = applicationId;
  }

  static createApplicant(firstName, lastName) {
    return Http.request({
      url: 'https://api.onfido.com/v3/applicants',
      method: 'POST',
      headers: {
        'Authorization':  'Token token=' + this.apiToken,
        'Content-Type': 'application/json'
      },
      content: JSON.stringify({
        first_name: firstName,
        last_name: lastName
      })
    }).then(result => {
      let data = result.content.toJSON()
      if (data.error) {
        throw data.error.message;
      } else {
        this.applicantId = data.id;
        return data;
      }
    });
  }

  static getSdkToken(applicantId?, applicationId?) {
    return Http.request({
      url: 'https://api.onfido.com/v3/sdk_token',
      method: 'POST',
      headers: {
        'Authorization':  'Token token=' + this.apiToken,
        'Content-Type': 'application/json'
      },
      content: JSON.stringify({
        applicant_id: applicantId || this.applicantId,
        application_id: applicationId || this.applicationId
      })
    }).then(result => {
      let data = result.content.toJSON()
      if (data.error || !data.token) {
        throw data.error ? data.error.message : 'Unknown error.';
      } else {
        this.sdkToken = data.token;
        return data.token;
      }
    });
  }

  static verify(sdkToken?, options?: IOnfidoConfigOptions): any {}
}
