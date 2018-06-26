'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const config = require('./common')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL:config.dev_url,
  API:config.dev_api
})
