const Redis = require('ioredis')
const env = require('../environment')

const redis = new Redis({
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
})

module.exports = redis
