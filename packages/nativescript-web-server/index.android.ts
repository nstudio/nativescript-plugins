declare const io;
import { ServerStatus } from './common';

export class Server {
	private server;
	constructor(config: { logger?: boolean; path: string; directory: string; index?: string; hostName?: string; port: number; workers?: number; showFiles?: boolean }) {
		this.server = new io.nstudio.plugins.webserver.Server(config.logger ?? false, config.path, config.directory, config.index ?? null, config.hostName ?? '127.0.0.1', config.port ?? 8080, config.workers ?? 2, config.showFiles ?? false);
	}

	get status(): ServerStatus {
		return this.server.getStatus() as never;
	}

	setStatusChangeListener(value: (status: ServerStatus) => void) {
		this.server.setStatusCallback(
			new io.nstudio.plugins.webserver.Server.StatusCallback({
				onChange(status: ServerStatus) {
					value(status);
				},
			})
		);
	}

	start() {
		return new Promise<void>((resolve, reject) => {
			this.server.start(
				new io.nstudio.plugins.webserver.Server.Callback({
					onSuccess() {
						resolve();
					},
					onError(error: string) {
						reject(error);
					},
				})
			);
		});
	}
	stop(wait = false) {
		return new Promise<void>((resolve, reject) => {
			this.server.stop(
				wait,
				new io.nstudio.plugins.webserver.Server.Callback({
					onSuccess() {
						resolve();
					},
					onError(error: string) {
						reject(error);
					},
				})
			);
		});
	}
}
