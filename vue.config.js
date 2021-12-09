const path = require('path');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  lintOnSave: true,
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()]
  // },
  chainWebpack: webpackConfig => {
    webpackConfig.resolve.alias.set('@assets', path.resolve('src/assets'));
    webpackConfig.resolve.alias.set('@components', path.resolve('src/components'));
    webpackConfig.resolve.alias.set('@pages', path.resolve('src/pages'));
    webpackConfig.resolve.alias.set('@store', path.resolve('src/store'));
  }
};
