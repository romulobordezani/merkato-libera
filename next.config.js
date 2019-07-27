const withSass = require('@zeit/next-sass');
const CONFIG = require('./config');

module.exports = withSass({
  /* Next config options goes here */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  publicRuntimeConfig: CONFIG
});
