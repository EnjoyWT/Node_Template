var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const userRoutes = require('./routes/userRoute.js');
const cors = require('cors');

var app = express();

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', indexRouter);

/****************start********当做web 服务*******start*************/
// app.use(express.static(path.join(__dirname, 'public')));
/* 不同子路径,需要web代码注意文件的加载路径*/
// app.use('/images', express.static(path.join(__dirname, 'public/images')));
// app.use('/files', express.static(path.join(__dirname, 'static/files')));
/****************start********当做web 服务********end************/

app.use('/api', userRoutes);

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
