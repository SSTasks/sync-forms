var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('./app-server/schemas/userSchema');
var config = require('./app-server/config');

require("./app-server/schemas/db");

var index = require('./app-server/routes/index');
var usersRouter = require('./app-server/routes/usersRouter');

var authorizeUser = require('./app-server/middlewares/authorizeUser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app-server/views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());    
app.use(express.static(__dirname + '/app-server/dist/')); // !
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (60 * 60) * 8 * 1000 // 8 hours
    }
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(authorizeUser));

//app.use('/', index);
//app.use('/', usersRouter);
app.use('/users', usersRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/app-server/dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
