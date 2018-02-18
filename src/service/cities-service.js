'use strict';

var redisClient = require('../repository/cities-repository');
var citiesRepository = require('../repository/cities-csv-repository');

var dbCities = citiesRepository.getCities();

var mapCity = function(city) {
  return dbCities.then(cities => {
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
    .then(cities => {
      return Promise.all(cities.map(mapCity))
    });
};

var persistCity = function(city) {
  return redisClient.addCity(city);
};

var allCities = function() {
  return citiesRepository.getCities()
    .then(cities => {
      return cities.map(c => {
        return {
          'name': c.name,
          'country': c.country
        }});
    });
};

module.exports = {
  findCities: findCities,
  persistCity: persistCity,
  allCities: allCities
};
