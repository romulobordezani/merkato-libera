module.exports = {
  default: {
    COLORS: {
      custom: 'yellow',
      data: 'gray',
      debug: 'blue',
      error: 'red',
      info: 'green',
      silly: 'magenta',
      verbose: 'cyan',
      warn: 'yellow'
    },
    FORMAT: 'readable',
    LOG_LEVEL: 'debug',
    MAX_FILE_SIZE: 10 * 1024 * 1024,
    MONGO_COLLECTION_NAME: 'logs',
    TIMESTAMP: 'YYYY-MM-DD HH:mm:ss',
    TRANSPORT: ['console', 'mongo']
  },
  test: {
    LOG_LEVEL: 'silent',
    TRANSPORT: ['console']
  }
};
