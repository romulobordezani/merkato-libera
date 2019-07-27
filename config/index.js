const CONFIG = () => ({
  MELI_API: 'https://api.mercadolibre.com',
  MELI_SITE: process.env.MELI_SITE || 'MLB',
  API_URL: process.env.API_URL,
  PORT: parseInt(process.env.PORT, 10) || 3000,
  dev: process.env.NODE_ENV !== 'production'
});

module.exports = CONFIG;
