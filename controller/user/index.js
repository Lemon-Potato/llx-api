var User = require("../../model/user");

// 基本模型操作
exports.some = (req, res) => {
  User.findAll().then(users => {
    res.send(JSON.stringify(users, null, 4));
  })
}