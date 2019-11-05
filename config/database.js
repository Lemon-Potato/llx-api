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

module.exports = Mysql;