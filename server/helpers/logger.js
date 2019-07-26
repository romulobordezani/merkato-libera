const winston = require('winston');
require('winston-daily-rotate-file');
const CONFIG = require('../../config/logger');

const { createLogger, format, transports } = winston;
const { combine, colorize, printf, json, errors } = format;

const {
  COLORS,
  LOG_LEVEL,
  MAX_FILE_SIZE,
  TIMESTAMP
} = CONFIG;

const readableFormat = combine(
  colorize({ colors: COLORS, all: true }),
  format.timestamp({ format: TIMESTAMP }),
  printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
);

const jsonFormat = combine(
  format.timestamp({ format: TIMESTAMP }),
  errors({ stack: true }),
  json()
);

module.exports = createLogger({
  exitOnError: false,
  format: jsonFormat,
  level: LOG_LEVEL,
  transports: [
    new transports.Console({
      format: readableFormat
    }),
    new (transports.DailyRotateFile)({
      datePattern: 'YYYY-MM-DD',
      filename: 'logs/meli-test-app-%DATE%.log',
      maxFiles: '1m',
      maxSize: MAX_FILE_SIZE,
      zippedArchive: true
    })
  ]
});
