import { knownFolders, WebView } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { Server } from '@nstudio/nativescript-web-server';

export class DemoSharedNativescriptWebServer extends DemoSharedBase {
	server: Server;
	webview: WebView;
	constructor() {
		super();
		this.server = new Server({
      logger: true,
			path: '/test',
			directory: knownFolders.currentApp().path + '/web_assets',
		});
    this.set('status', this.server.status);
	}

	loaded(event) {
		this.webview = event.object;
	}

	getStatus() {
		this.set('status', this.server.status);
	}

	start() {
		this.server
			.start()
			.then(() => {
				console.log('Server started', NSThread.currentThread);
        if(this.webview) {
          this.webview.src = 'http://127.0.0.1:8080/test';
        }
			})
			.catch((error) => {
				console.error('Error starting server:', error);
			});
	}

	stop() {
		this.server
			.stop()
			.then(() => {
				console.log('Server stopped');
			})
			.catch((error) => {
				console.error('Error stopping server:', error);
			});
	}
}
