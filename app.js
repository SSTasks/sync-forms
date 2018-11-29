var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var { mongoose } = require('./app-server/schemas/db');
var config = require('./app-server/config');
var errorHandler = require('./app-server/middlewares/errorHandler');

require("./app-server/schemas/db");

var forms = require('./app-server/routes/forms');
var screenshot = require('./app-server/routes/screenshot');
var usersRouter = require('./app-server/routes/usersRouter');
var interviewRouter = require('./app-server/routes/interviewRouter');
var adminRouter = require('./app-server/routes/adminRouter');
var statisticsRouter = require('./app-server/routes/statisticsRouter');

// var formsRouter = require('./app-server/routes/formsRouter');

var authorizeUser = require('./app-server/middlewares/authorizeUser');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// make sockets available
require("./app-server/interviewManager/interviewSockets").interviewHandler(io);

var checkAuth = require('./app-server/middlewares/checkAuthorization');

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
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (60 * 60) * 2 * 1000 // 2 hours
    }
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(authorizeUser));

app.use('/users', usersRouter);
app.use('/form', forms);
app.use('/screenshot', screenshot);
app.use('/interview', interviewRouter);
app.use('/adm', adminRouter);
app.use('/stats', statisticsRouter);


// unauthorized users don't have access to these routes
app.use('/preview', checkAuth);
app.use('/admin', checkAuth);
app.use('/constructor', checkAuth);
app.use('/statistics', checkAuth);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/app-server/dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(errorHandler);

module.exports = {
    app: app,
    server: server
};
