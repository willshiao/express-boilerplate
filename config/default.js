'use strict'

module.exports = {
  site: {
    port: 3000  // Default port number, can be overriden with the PORT env variable
  },
  logger: {  // Settings for the logger, passed to winston
    settings: {
      level: 'debug',
      prettyPrint: true,
      colorize: true,
      silent: false,
      timestamp: true
    }
  }
}
