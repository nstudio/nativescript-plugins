import { knownFolders, WebView } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { Client, Server, WebSocketServer } from '@nstudio/nativescript-web-server';

export class DemoSharedNativescriptWebServer extends DemoSharedBase {
	server: Server;
	wss: WebSocketServer;
	webview: WebView;
	clients: Set<number> = new Set();
	constructor() {
		super();
		this.server = new Server({
			logger: true,
			path: '/test',
			directory: knownFolders.currentApp().path + '/web_assets',
		});
		this.set('status', this.server.status);
		this.wss = new WebSocketServer({
			logger: true,
			path: '/ws',
			port: 8081,
		});
		this.wss.on('connection', (args: any) => {
			console.log('connection:  args.client.id', args.client.id);
			this.clients.add(args.client.id);
		});
		this.wss.on('close', (args: any) => {
			console.log(args.client.id, `Goodbye client ${args.client.id}`);
			this.clients.delete(args.client.id);
		});
		this.wss.on('message', (args: any) => {
			console.log('on message', args.message);
		});
		Promise.all([this.server.start(), this.wss.start()])
		.then(() => {
			console.log('started');
		});
		setInterval(() => {
			this.clients.forEach((client) => {
				this.wss.send(client, 'Hello from server: ' + client);
			});
		}, 1000);
	}

	loaded(event) {
		this.webview = event.object;
	}

	getStatus() {
		this.set('status', this.server.status);
	}

	start() {
		Promise.all([this.wss.start()])
			.then(() => {
				console.log('Server started', NSThread.currentThread);
				if (this.webview) {
					this.webview.src = 'http://127.0.0.1:8080/test';
				}
			})
			.catch((error) => {
				console.error('Error starting server:', error);
			});
	}

	stop() {
		Promise.all([this.wss.stop()])
			.then(() => {
				console.log('Server stopped');
			})
			.catch((error) => {
				console.error('Error stopping server:', error);
			});
	}
}
