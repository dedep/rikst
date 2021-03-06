'use strict';

var redis = require('redis');
var Promise = require('es6-promise').Promise;

let defaultRedisUrl = "redis://localhost:6379";
let redisUrl = process.env.REDIS_URL || defaultRedisUrl;

var cities = function() {
  var client = redis.createClient(redisUrl);

  var getAllKeys = function() {
    return new Promise((resolve) => {
      client.keys("*", (err, keys) => {
        resolve(keys);
      });
    })
  };

  var getKeyValue = function(key) {
    return new Promise((resolve) =>
      client.get(key, (err, reply) => {
        resolve({
          'value': reply,
          'key': key
        });
      })
    )
  };

  var getAllValues = function(keys) {
    var promisesArray = keys.map(key => {
      return getKeyValue(key);
    });

    return Promise.all(promisesArray);
  };

  return getAllKeys()
    .then(getAllValues)
    .then(result => {
      client.quit();
      return result;
    })
};

var addCity = function(city) {
  var client = redis.createClient(redisUrl);

  return new Promise((resolve) =>
    client.set(city.city, city.country, () => {
      resolve(true);
    })
  );
};

module.exports = {
  cities: cities,
  addCity: addCity
};
