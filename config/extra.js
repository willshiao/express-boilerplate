/**
 * This file contains additional configuration settings
 *  required by modules in the /extra directory.
 * Comments on a new line describe the line(s) below them.
 */
'use strict'

module.exports = {
  site: {
    // Allowed origins for CORS. Required by the enableCrossOrigin function in middleware.js.
    corsAllow: '*'
  },
  // MongoDB/mongoose configuration settings
  db: {
    url: 'mongodb://localhost:27017/sample',
    options: {
      useNewUrlParser: true
    }
  },
  // Redis configuration settings. Required for the redis module.
  redis: {
    connection: {
      host: '127.0.0.1',
      port: 6379
    }
  },
  // Json web token settings. Required for the jwt module.
  jwt: {
    secret: 'changeme',
    settings: {
      expiresIn: '5d'
    }
  }
}
