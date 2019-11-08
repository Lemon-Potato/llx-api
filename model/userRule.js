const Sequlize = require('sequelize');
var sequelize = require("../utils/mysqlHandle");

const Model = Sequlize.Model;
class UserRule extends Model {}

UserRule.init({
  pid: {
    type: Sequlize.INTEGER,
    notNull: true,
  },
  name: {
    type: Sequlize.STRING,
    notNull: true,
  },
  title: {
    type: Sequlize.STRING,
    notNull: true,
  },
  remark: {
    type: Sequlize.STRING,
  },
  isMenu: {
    type: Sequlize.STRING,
    field: 'is_menu',
    notNull: true,
  },
  status: {
    type: Sequlize.ENUM('normal', 'hidden'),
    notNull: true,
  },
  createDate: {
    type: Sequlize.INTEGER,
    field: 'create_at'
  },
  updateDate: {
    type: Sequlize.INTEGER,
    field: 'update_at'
  },
  weigh: {
    type: Sequlize.INTEGER,
  }
}, {
  sequelize,
  freezeTableName: true,
  modelName: 'llx_user_rule',
  timestamps: false
})

module.exports = UserRule;