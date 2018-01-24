'use strict';

var citiesService = require('../service/cities-service');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  citiesService.findCities()
    .then(cities => {
      return res.json(cities)
    });
});

router.post('/', function(req, res) {
  citiesService.persistCity({
    'city': req.body.city,
    'country': req.body.country
  }).then(x => res.json('ok'));
});

module.exports = router;
