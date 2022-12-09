const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {

  webpack.init(env);
  webpack.useConfig('typescript');

  webpack.chainWebpack((config) => {
    // shared demo code
    config.resolve.alias.set('@demo/shared', resolve(__dirname, '..', '..', 'tools', 'demo'));
  });


  webpack.Utils.addCopyRule({
    from: '../../../tools/assets/videos', 
		to: 'assets/videos',
    context: webpack.Utils.project.getProjectFilePath('node_modules')
  });

  return webpack.resolveConfig();
};
