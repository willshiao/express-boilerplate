'use strict'

const config = require('config')

module.exports = {
  enableCrossOrigin (req, res, next) {
    res.header('Access-Control-Allow-Origin', config.get('site.corsAllow'))
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
  }
}
