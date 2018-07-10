'use strict'

const Promise = require('bluebird')
const jwt = Promise.promisifyAll(require('jsonwebtoken'))
const expressJwt = require('express-jwt')
const config = require('./config')

module.exports = {
  async sign (data) {
    return jwt.signAsync(data, config.get('jwt.secret'), config.get('jwt.settings'))
  },
  async verify (token) {
    return jwt.verify(token, config.get('jwt.secret'))
  },
  express: expressJwt({ secret: config.get('jwt.secret') })
}
