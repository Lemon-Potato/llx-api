const Sequlize = require('sequelize');
var sequelize = require("../utils/mysqlHandle");

const Model = Sequlize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequlize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequlize.STRING
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
})

module.exports = User;