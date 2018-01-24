'use strict';

var csv = require('fast-csv');
var Promise = require('es6-promise').Promise;

var cache = null;

var mapCsvEntry = function(entry) {
  return {
    'name': entry[0],
    'latitude': entry[1],
    'longitude': entry[2],
    'population': entry[3],
    'country': entry[4]
  }
};

var getCities = function() {
  if (cache !== null) {
    return Promise.resolve(cache);
  }

  return new Promise((resolve) => {
    var acc = [];

    csv.fromPath("datasource/worldcities-basic.csv")
      .on("data", function(data){
        var mappedCity = mapCsvEntry(data);
        acc.push(mappedCity);
      })
      .on("end", function(){
        cache = acc;
        resolve(acc);
      });
  });
};

module.exports = {
  getCities: getCities
};
