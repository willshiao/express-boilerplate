'use strict'

const config = require('config')
const Promise = require('bluebird')
const jwt = Promise.promisifyAll(require('jsonwebtoken'))

module.exports = {
  async sign (data) {
    return jwt.signAsync({ data }, config.get('jwt.secret'), config.get('jwt.settings'))
  },
  async verify (token) {
    return jwt.verify(token, config.get('jwt.secret'))
  }
}
