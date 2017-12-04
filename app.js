'use strict'

const config = require('config')
const express = require('express')
const logger = require('./lib/logger')

require('./lib/extendExpress').extendResponse(express.response)
const indexRoute = require('./routes/index')

const app = express()
app.use(indexRoute)

const port = process.env.PORT || config.get('site.port')
app.listen(port, () => {
  logger.debug(`Listening on port #${port}`)
})
