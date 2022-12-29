const fs = require('fs');
const path = require('path');
module.exports = function (androidResourcesMigrationService: IAndroidResourcesMigrationService, logger: ILogger, projectData: IProjectData, injector: IInjector, hookArgs: any) {
	const platformName = ((hookArgs && hookArgs.platformData && hookArgs.platformData.normalizedPlatformName) || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.platform) || '').toLowerCase();

	projectData = hookArgs && (hookArgs.projectData || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.projectData));

	const platformData = getPlatformData(hookArgs && hookArgs.platformData, projectData, platformName, injector);

	const environmentName = hookArgs.prepareData.env.use ? hookArgReader(hookArgs.prepareData.env.use) : '';

	if (platformName === 'android') {
		const rootPath = projectData.projectDir;
		const buildGradle = path.join(rootPath, 'platforms', 'android', 'app', 'build.gradle');
		const include = path.join(rootPath, 'platforms', 'android', 'fullstory.config.gradle');

		const configJs = path.join(rootPath, 'fullstory.config.js');
		if (fs.existsSync(buildGradle) && fs.existsSync(configJs)) {
			const config = require(configJs);
			const fullstory = `
			apply plugin: 'fullstory'

			fullstory {
				org '${config.org}'
				enabledVariants '${config.enabledVariants ?? 'release'}'
				logcatLevel '${config.logcatLevel ?? 'off'}'
				logLevel '${config.logLevel ?? 'info'}'
				recordOnStart ${config.recordOnStart ?? true}
				addDependencies ${config.addDependencies ?? true}
			}
			`;
			fs.writeFileSync(include, fullstory);
			const buildGradleData = fs.readFileSync(buildGradle);
			let buildGradleContent = buildGradleData.toString();
			let write = false;

			
			if (buildGradleContent.indexOf("apply from: '../fullstory.config.gradle'") === -1) {
				const application = 'apply plugin: "com.android.application"';
				buildGradleContent = buildGradleContent.replace(application, application + '\n' + "apply from: '../fullstory.config.gradle'");
				write = true;
			}

			if (write) {
				fs.writeFileSync(buildGradle, buildGradleContent);
			}
		}
	} else {
		logger.warn(`Platform '${platformName}' isn't supported: skipping fullstory`);
		return;
	}
};

function getPlatformData(platformData: IPlatformData, projectData: IProjectData, platform: string, injector: IInjector): IPlatformData {
	if (!platformData) {
		// Used in CLI 5.4.x and below:
		const platformsData = injector.resolve<IPlatformsData>('platformsData');
		platformData = platformsData.getPlatformData(platform, projectData);
	}

	return platformData;
}

const hookArgReader = (args) => {
	if (typeof args !== 'string') {
		return Object.keys(args)[0];
	} else {
		return args;
	}
};
