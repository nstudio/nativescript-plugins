# @nstudio/nativescript-persona

```javascript
ns plugin add @nstudio/nativescript-persona
```

## Usage

The Persona Inquiry flow can be initiated with either a template ID or an inquiry ID.

Please refer to the code sample below and replace my_template_id with your template ID. You can find your template ID on the Persona Dashboard under Integration.

This starts the Inquiry flow and takes control of the user interface. Once the flow completes, the control of the user interface is returned to the app and the appropriate callbacks are called.

### Note
**Please Call** `Inquiry.init()` before the app launches 

```ts
import {Inquiry} from '@nstudio/nativescript-persona';
Inquiry.init();
```


```ts
import { Dialogs } from '@nativescript/core';
import {Inquiry, Environment} from '@nstudio/nativescript-persona';

Inquiry.fromTemplate('my_template_id')
      .environment(Environment.SANDBOX)
      .onComplete((inquiryId, status, fields) => {
				setTimeout(() => {
					Dialogs.alert({
						title: 'Complete',
						message: `Inquiry ${inquiryId} completed with status "${status}."`,
						cancelable: true,
						okButtonText: 'Ok',
					});
				});
				console.log(fields);
			})
			.onCanceled((inquiryId, sessionToken) => {
				setTimeout(() => {
					Dialogs.alert({
						title: 'Canceled',
						message: `Inquiry ${inquiryId} was cancelled`,
						cancelable: true,
						okButtonText: 'Ok',
					});
				}, 10);
			})
			.onError((error) => {
				setTimeout(() => {
					Dialogs.alert({
						title: 'Error',
						message: error.message,
						cancelable: true,
						okButtonText: 'Ok',
					});
				});
				console.log('onError'), error;
			})
			.build()
			.start();
      .build()
      .start();

```


### Configuration options

Some different configuration example can be found below

```ts

import {Inquiry, Environment} from '@nstudio/nativescript-persona';

// Configuration with only a template ID
Inquiry.fromTemplate("my_template_id").build().start();

// Configuration with only a template ID in the sandbox
Inquiry.fromTemplate("my_template_id")
   .environment(Environment.SANDBOX)

// Configuration with a template and reference ID
Inquiry.fromTemplate("my_template_id")
   .referenceId("myReference")
   .build()
   .start();

// Configuration with a template and account ID
Inquiry.fromTemplate("my_template_id")
    .accountId("act_W6thEnEU19gphPqq5uTzZ4Y8")
    .build()
    .start();

// Configuration passing fields into the request
Inquiry.fromTemplate("my_template_id")
  .fields(
    Fields.builder()
      .string('nameFirst', 'Alexander')
      .string('nameLast', 'example')
      .build(),
  )
  .build()
  .start();

// Configuration with only an inquiry ID
Inquiry.fromInquiry("inq_JAZjHuAT738Q63BdgCuEJQre").build().start();

// Configuration resuming an inquiry session with an access token 
Inquiry.fromInquiry("inq_JAZjHuAT738Q63BdgCuEJQre")
    .sessionToken("SOME_SESSION_TOKEN")
    .build()
    .start();

```

## License

Apache License Version 2.0
