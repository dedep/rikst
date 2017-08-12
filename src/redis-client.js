'use strict';

var redis = require('redis');
var Promise = require('es6-promise').Promise;

var cities = function() {
  var client = redis.createClient(process.env.REDIS_URL);

  return new Promise((resolve) => {
    client.keys("city_*", (err, replies) => {
      resolve(replies);
      client.quit();
    });
  });
};

module.exports = {
  cities: cities
};
