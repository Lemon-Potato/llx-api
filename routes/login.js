var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var jwtOptions = require('../utils/jwt').jwtOptions;

// 测试用户数据
var users = [
  {
    id: 1,
    name: 'test',
    password: 'test'
  }
];

/* GET users listing. */
router.post('/', function(req, res, next) {
  if(req.body.name && req.body.password){
    var name = req.body.name;
    var password = req.body.password;
  }
  var user = users.find(user => user.name === name);
  if( !user ){
    res.status(401).json({message: '账号或密码错误'});
  }

  if(user.password === req.body.password) {
    var payload = { id: user.id };
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({code: "200", message: "ok", token: token});
  } else {
    res.status(401).json({message: "账号或密码错误"});
  }

});

module.exports = router;
