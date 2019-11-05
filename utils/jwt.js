var bodyParser = require("body-parser");
var passport = require("passport");
var passportJWT = require("passport-jwt");

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