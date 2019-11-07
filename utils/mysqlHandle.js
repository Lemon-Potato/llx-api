const Sequlize = require('sequelize');
const MysqlConfig = require('../config/database').Mysql;

const sequelize = new Sequlize(
  MysqlConfig.database,
  MysqlConfig.username,
  MysqlConfig.password,
  {
    host: MysqlConfig.host,
    dialect: "mysql",
    pool: MysqlConfig.pool
  }
);

module.exports = sequelize;