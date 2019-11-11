const Sequlize = require('sequelize');
var sequelize = require("../utils/mysqlHandle");

const Model = Sequlize.Model;
class UserGroup extends Model {}

UserGroup.init({
  pid: {
    type: Sequlize.INTEGER,
    notNull: true,
  },
  name: {
    type: Sequlize.STRING,
    notNull: true,
  },
  rules: {
    type: Sequlize.STRING
  },
  status: {
    type: Sequlize.TINYINT
  },
  createDate: {
    type: Sequlize.INTEGER,
    field: 'create_at'
  },
  updateDate: {
    type: Sequlize.INTEGER,
    field: 'update_at'
  },
}, {
  sequelize,
  freezeTableName: true,
  modelName: 'llx_user_group',
  timestamps: false
})

module.exports = UserGroup;