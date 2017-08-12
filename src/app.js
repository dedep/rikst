var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cities = require('./routes/cities');
var cities2 = require('./routes/cities2');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/cities', cities);
app.use('/cities2', cities2);

module.exports = app;
