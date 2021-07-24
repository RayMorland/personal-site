var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var expressJwt = require('express-jwt');
var http = require('http');
var passport = require('passport');
var helmet = require('helmet');
var csp = require('helmet-csp');

// require('./api/models/db');

// var routesApi = require('./api/routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
var handlebars = require('express-handlebars').create({
  defaultLayout: 'main',
  helpers: {
    section: function(name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(cors());

app.use(helmet());

// app.use(function(req, res, next) {
//     var host = req.get('Host');
//     var originalUrl = req.originalUrl;
//     var fullUrl = host + originalUrl;
//     if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'test') {
//         if(host.indexOf('abadata.') == -1 && (fullUrl.indexOf('/wp-content/') >= 0 || fullUrl.indexOf('/wp-includes/') >= 0)){
//             return res.redirect(301, 'http://abadata.abacusdatagraphics.com' + originalUrl);
//         } else if(host.indexOf('abadata.') == -1 && fullUrl.indexOf('/images/') >= 0){
//             return res.redirect(301, 'http://abadata.abacusdatagraphics.com' + originalUrl);
//         } else if(host.indexOf('abadata.') == -1 && fullUrl.indexOf('/js/') >= 0){
//             return res.redirect(301, 'http://abadata.abacusdatagraphics.com' + originalUrl);
//         } else if(host.indexOf('abadata.') == -1 && fullUrl.indexOf('/abadata/') >= 0){
//             return res.redirect(301, 'http://abadata.abacusdatagraphics.com' + originalUrl);
//         } else if(host.indexOf('abadata.') == -1 && fullUrl.indexOf('/AbaData/') >= 0){
//             return res.redirect(301, 'http://abadata.abacusdatagraphics.com' + originalUrl);
//         }  else if(host.indexOf('abadata.') == -1 && fullUrl.indexOf('/abadata-login.asp') >= 0){
//             return res.redirect(301, 'http://abadata.abacusdatagraphics.com');
//         } 
//         if(fullUrl.indexOf('/index.asp') >= 0){
//             return res.redirect(301, 'http://abadata.abacusdatagraphics.com' + originalUrl);
//         } else if(fullUrl.indexOf('/field-services.asp') >= 0){
//             return res.redirect(301, 'http://abacus.abacusdatagraphics.com/field-services');
//         } 
//         else if(fullUrl.indexOf('/mapping.asp') >= 0){
//             return res.redirect(301, 'http://abacus.abacusdatagraphics.com/mapping-services');
//         } 
//         else if(fullUrl.indexOf('/one-call.asp') >= 0){
//             return res.redirect(301, 'http://abacus.abacusdatagraphics.com/one-call');
//         } 
//         else if(fullUrl.indexOf('/ground-disturbance.asp') >= 0){
//             return res.redirect(301, 'http://abacus.abacusdatagraphics.com/ground-disturbance');
//         } 
//         else if(fullUrl.indexOf('/uav-services.asp') >= 0){
//             return res.redirect(301, 'http://abacus.abacusdatagraphics.com/uav-services');
//         } 
//         else if(fullUrl.indexOf('/abadata-2-0.asp') >= 0){
//             return res.redirect(301, 'http://abacus.abacusdatagraphics.com/abadata');
//         } 
//         else if(fullUrl.indexOf('/contact-us.asp') >= 0){
//             return res.redirect(301, 'http://abacus.abacusdatagraphics.com/about');
//         }
//         return next();
//     }
//     return next();
// });

// app.use('/api', routesApi);

app.use(express.static(path.join(__dirname, 'client/dist/personal-site')));

// app.get('/*', function(req, res, next) {
//     if (process.env.NODE_ENV == 'production') {
//         if (req.headers.host.match(/^www/) == null ) res.redirect( 301, 'http://www.' + req.headers.host + req.url);
//         else next();
//     }
//     next();
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/personal-site/index.html'));
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;