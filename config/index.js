const CONFIG = {
  MELI_API: process.env.MELI_API || 'https://api.mercadolibre.com',
  HOST: process.env.HOST || 'http://localhost:3000',
  PORT: parseInt(process.env.PORT, 10) || 3000,
  dev: process.env.NODE_ENV !== 'production'
};

module.exports = CONFIG;
