module.exports = {
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
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  MAX_FILE_SIZE: 10 * 1024 * 1024,
  TIMESTAMP: 'DD-MM-YYYY HH:mm:ss'
};
