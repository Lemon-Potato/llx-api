const Sequlize = require('sequelize');
const MysqlConfig = require('../config/database');

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