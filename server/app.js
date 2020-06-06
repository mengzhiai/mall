/*
 * @Author: jun
 * @Date: 2020-06-04 22:47:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-07 02:53:20
 * @FilePath: \mall\server\app.js
 * @Description: 
 */ 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入body-parser
var bodyParser = require('body-parser');

//引入路由
// let controller = require('./controller');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
let allRouter = require('./routes/index')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//使用bodyParser
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));



app.use(allRouter);

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


//解决跨域
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
      res.send(200);
  } else {
      next();
  }
});
// 自定义跨域中间件
var allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
app.use(allowCors); //使用跨域中间件



module.exports = app;
