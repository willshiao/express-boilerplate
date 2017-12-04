'use strict'

const logger = require('./logger').loggers.get('api')

const handlers = {}

// Handles SyntaxErrors and other errors. Should be used last
handlers.ErrorHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError) return res.failMsg('Invalid JSON.')
  logger.warn('Got error name: ', err)
  return res.errorMsg('An error occurred.')
}

// Passes down errors from async functions
handlers.AsyncHandler = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next)
  }

module.exports = handlers
