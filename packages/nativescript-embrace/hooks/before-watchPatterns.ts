module.exports = function (hookArgs: any) {
	if (hookArgs.liveSyncData && !hookArgs.liveSyncData.bundle) {
		return (args, originalMethod) => {
			return originalMethod(...args).then((originalPatterns) => {
				const projectData: IProjectData = hookArgs.projectData;
				const appResourcesRelativeDirectoryPath = projectData.getAppResourcesRelativeDirectoryPath();
				console.log('watchPatterns', projectData.projectDir);
				return originalPatterns;
			});
		};
	}
};
