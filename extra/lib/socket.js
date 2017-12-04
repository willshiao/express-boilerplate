'use strict'

const logger = require('./logger')

let io

/**
 * Accepts an HTTP server object and returns a socket.io object from it.
 * @param   {HttpServer} server   Optional HTTP server object. Not required if already created.
 * @return  {Object}          Socket.IO instance.
 */
module.exports = (server) => {
  if (io) return io
  io = require('socket.io')(server)

  io.on('connection', (socket) => {
    logger.debug('Connected')
  })

  return io
}
