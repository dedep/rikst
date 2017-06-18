var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  let cities = [];
  cities.push({"country": "Albania", "city": "Tirana"});
  cities.push({"country": "Germany", "city": "Berlin"});
  cities.push({"country": "Germany", "city": "Drezno"});
  cities.push({"country": "Russia", "city": "Kaliningrad"});

  res.json(cities);
});

module.exports = router;
