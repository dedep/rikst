'use strict';

var express = require('express');
var router = express.Router();

let cities = [];

cities.push({"country": "Albania", "city": "Tirana"});
cities.push({"country": "Germany", "city": "Berlin"});
cities.push({"country": "Germany", "city": "Drezno"});
cities.push({"country": "Russia", "city": "Kaliningrad"});

router.get('/', function(req, res) {
  res.json(cities);
});

router.post('/', function(req, res) {
  cities.push(req.body);
  res.send({});
});

module.exports = router;
