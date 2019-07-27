const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* Next config options goes here */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  publicRuntimeConfig: {
    MELI_API: 'https://api.mercadolibre.com',
    MELI_SITE: process.env.MELI_SITE || 'MLB',
    API_URL: process.env.API_URL || 'http://localhost:3000',
    PORT: parseInt(process.env.PORT, 10) || 3000,
    dev: process.env.NODE_ENV !== 'production'
  }
});
