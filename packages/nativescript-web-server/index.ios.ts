import { ServerStatus } from './common';

export class Server {
	private server: NSCServer;
	constructor(config: { logger: boolean; path: string; directory: string; index: string; hostName: string; port: number; workers: number; showFiles?: boolean }) {
		this.server = NSCServer.alloc().init(config.logger ?? false, config.path, config.directory, config.index ?? null, config.hostName ?? '127.0.0.1', config.port ?? 8080, config.workers ?? 2, config.showFiles ?? false);
	}

	get status(): ServerStatus {
		return this.server.status as never;
	}

	start() {
		return new Promise<void>((resolve, reject) => {
			this.server.start((error: string) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
	stop(wait = false) {
		return new Promise<void>((resolve, reject) => {
			this.server.stop(wait, (error: string) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
}
