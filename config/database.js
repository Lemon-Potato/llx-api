const Mysql = {
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  database: 'express',
  port: '3306',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
};

const Redis = {
  host: '127.0.0.1',
  port: '6379',
  auth: '123456',
  opt: {
    auth_pass: '123456',
    db: 1
  }
};

module.exports.Mysql = Mysql;
module.exports.Redis = Redis;