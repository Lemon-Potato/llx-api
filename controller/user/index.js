var User = require("../../model/user");
var UserRule = require("../../model/userRule");

// 基本模型操作
exports.some = (req, res) => {
  UserRule.findAll().then(userRules => {
    res.send(JSON.stringify(userRules, null, 4));
  })
}