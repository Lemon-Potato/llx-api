const redis = require('redis');
const RedisConfig = require('../config/database').Redis;

const redisClient = redis.createClient(RedisConfig.port, RedisConfig.host, RedisConfig.opt);

redisClient.on('error', err => {
  // TODO 日志功能
  console.log(err)
})

module.exports = redisClient;