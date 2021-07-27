import { Application } from '@nativescript/core';
const { localize } = require('@nativescript/localize')
Application.setResources({ L: localize })
Application.run({ moduleName: 'app-root' });
