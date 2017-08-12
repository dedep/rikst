import {allCountries} from './CountriesRepository';
import {filter} from 'lodash';

import $ from 'jquery';

let cities = new Promise((resolve, reject) => {
  $.ajax({
    'type': 'GET',
    'url': '/cities',
    'success': function (response) {
      resolve(response);
    },
    'error': function (xhr, ajaxOptions, thrownError) {
      reject(thrownError);
    }
  });
});

let addCity = function (city) {
  let country = filter(allCountries, (c) => c.country === city.country)[0];

  return new Promise((resolve, reject) => {
    $.ajax({
      'type': 'POST',
      'url': '/cities',
      'data': {"country": country.code, "city": city.name},
      'success': function () {
        resolve();
      },
      'error': function () {
        reject('Ajax req error');
      }
    });
  });
};

export {cities, addCity};
