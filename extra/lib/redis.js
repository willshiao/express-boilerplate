'use strict'

const redis = require('redis')
const config = require('config')
const Promise = require('bluebird')

const logger = require('./logger')
const client = redis.createClient(config.get('redis.connection'))

Promise.promisifyAll(redis.RedisClient.prototype)
Promise.promisifyAll(redis.Multi.prototype)

client.on('error', err => logger.error(err))

module.exports = client
