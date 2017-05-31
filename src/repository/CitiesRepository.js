import {City} from "../model/City";
import {countries} from './CountriesRepository';

let cities = [];
cities.push(new City(countries.Albania, "Tirana"));
cities.push(new City(countries.Andorra, "Andora"));
cities.push(new City(countries.Sweden, "Sztokholm"));
cities.push(new City(countries.Ukraine, "Lwów"));

let addCity = function(city) {
  cities.push(city);
};

export {cities, addCity};
