var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var redisClient = require('./utils/redisHandle');

const sessionStore = new RedisStore({
  client: redisClient
})

// login 登录接口
var loginRouter = require('./routes/login');
// api 基础出口
var apiRouter = require('./routes/api');

// --引入 jwt--
var jwt = require('./utils/jwt');
var passport = jwt.passport;
var bodyParser = jwt.bodyParser;

var app = express();

// -- 使用 passport bodyParser--
app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

// session
app.use(session({
  cookieName: 'session',
  secret: 'jyslbcqmygysdssjtwmydtsgx',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  store: sessionStore,
  saveUninitialized: false,
  resave: false,
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 登录接口
app.use('/login', loginRouter);
// API 接口
app.use('/api', passport.authenticate('jwt', { session: false }), apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
