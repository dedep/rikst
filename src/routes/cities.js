'use strict';

var express = require('express');
var router = express.Router();
var redisClient = require('../redis-client');

var mapCity = function(city) {
  return {"country": city.value, "city": city.key};
};

router.get('/', function(req, res) {
  redisClient.cities()
    .then(cities => cities.map(mapCity))
    .then(cities => res.json(cities));
});

module.exports = router;
