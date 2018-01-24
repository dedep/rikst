'use strict';

var redisClient = require('../repository/cities-repository');
var citiesRepository = require('../repository/cities-csv-repository');

var allCities = citiesRepository.getCities();

var mapCity = function(city) {
  return allCities.then(cities => {
    var cityDef = cities.filter(ct => city.key === ct.name)[0];

    return {
      "country": city.value,
      "city": city.key,
      "latitude": cityDef ? cityDef.latitude : undefined,
      "longitude": cityDef ? cityDef.longitude : undefined
    };
  });
};

var findCities = function() {
  return redisClient.cities()
    .then(cities => Promise.all(cities.map(mapCity)));
};

var persistCity = function(city) {
  redisClient.addCity(city);
};

module.exports = {
  findCities: findCities,
  persistCity: persistCity
};
