const fs = require('fs');
const path = require('path');
module.exports = function (androidResourcesMigrationService: IAndroidResourcesMigrationService, logger: ILogger, projectData: IProjectData, injector: IInjector, hookArgs: any) {
	const platformName = ((hookArgs && hookArgs.platformData && hookArgs.platformData.normalizedPlatformName) || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.platform) || '').toLowerCase();

	projectData = hookArgs && (hookArgs.projectData || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.projectData));

	const platformData = getPlatformData(hookArgs && hookArgs.platformData, projectData, platformName, injector);

	const environmentName = hookArgs.prepareData.env.use ? hookArgReader(hookArgs.prepareData.env.use) : '';

	if (platformName === 'android') {
		const dynatrace = `
		dependencies {
			  classpath 'com.dynatrace.tools.android:gradle-plugin:8.+'
		  `;

		const rootPath = projectData.projectDir;
		const buildGradle = path.join(rootPath, 'platforms', 'android', 'build.gradle');
		const include = path.join(rootPath, 'platforms', 'android', 'config.gradle');
		const configJson = path.join(rootPath, 'dynatrace.config.js');
		if (fs.existsSync(buildGradle) && fs.existsSync(configJson)) {
			const config = require(configJson);
			fs.writeFileSync(include, config.android.config);
			const buildGradleData = fs.readFileSync(buildGradle);
			let buildGradleContent = buildGradleData.toString();
			let write = false;

			if (buildGradleContent.indexOf('com.dynatrace.tools.android:gradle-plugin') === -1) {
				buildGradleContent = buildGradleContent.replace(//\bdependencies\b\s*{/, dynatrace);
				write = true;
			}

			if (buildGradleContent.indexOf("apply plugin: 'com.dynatrace.instrumentation'") === -1) {
				buildGradleContent = buildGradleContent + '\n' + "apply plugin: 'com.dynatrace.instrumentation'";
				write = true;
			}

			if (buildGradleContent.indexOf("apply from: './config.gradle'") === -1) {
				buildGradleContent = buildGradleContent + '\n' + "apply from: './config.gradle'";
				write = true;
			}

			if (write) {
				fs.writeFileSync(buildGradle, buildGradleContent);
			}
		}
	} else if (platformName === 'ios') {
		const rootPath = projectData.projectDir;
		const dynatracePlist = path.join(rootPath, 'platforms', 'ios', projectData.projectName, 'Dynatrace.plist');
		const configJson = path.join(rootPath, 'dynatrace.config.js');

		const xcode = require('nativescript-dev-xcode');
		const projectPath = path.join(rootPath, 'platforms', 'ios', `${projectData.projectName}.xcodeproj/project.pbxproj`);
		const myProj = xcode.project(projectPath);
		myProj.parse((e) => {
			if (fs.existsSync(configJson)) {
				const config = require(configJson);

				const pre = `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
        <plist version="1.0">
        <dict>`;

				const post = `</dict>
        </plist>`;

				fs.writeFileSync(dynatracePlist, pre + '\n' + config.ios.config + '\n' + post);
				const currentProj = myProj.writeSync();
				if (currentProj.indexOf('Dynatrace.plist') === -1) {
					const phase = myProj.addBuildPhase([dynatracePlist], 'PBXCopyFilesBuildPhase', 'Copy Dynatrace.plist', null, 'resources');
					phase.buildPhase['dstSubfolderSpec'] = 7;
					fs.writeFileSync(projectPath, myProj.writeSync());
				}
			}
		});
	} else {
		logger.warn(`Platform '${platformName}' isn't supported: skipping dynatrace`);
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
