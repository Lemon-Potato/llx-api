/**
 * JWT 验证方式
 * Header 带上 KEY => Authorization  VALUE => Bearer(空格)token
 */
var bodyParser = require("body-parser");
var passport = require("passport");
var passportJWT = require("passport-jwt");

// 还没引入数据库查
var users = [
  {
    id: 1,
    name: 'test',
    password: 'test'
  }
];

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'llxdabendan';

var Strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next){
  console.log('payload received', jwt_payload);
  var user = users.find(user => user.id === jwt_payload.id);
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
})

passport.use(Strategy);

module.exports = {
  passport: passport,
  bodyParser: bodyParser,
  jwtOptions: jwtOptions
}