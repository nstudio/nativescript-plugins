export class Server {
	private server: NSCServer;
	constructor(config: { logger?: boolean; path: string; directory: string; index?: string; hostName?: string; port?: number; workers?: number; showFiles?: boolean });

	get status(): ServerStatus;

	setStatusChangeListener(value: (status: ServerStatus) => void);

	start(): Promise<void>;

	stop(wait?: bool): Promise<void>;
}
