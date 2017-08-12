'use strict';

var express = require('express');
var router = express.Router();
var redisClient = require('../redis-client');

router.get('/', function(req, res) {
  redisClient.cities().then(cities => res.json(cities));
});

module.exports = router;
