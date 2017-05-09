import {City} from "./City";
import {countries} from './CountriesRepository';

let cities = [];
cities.push(new City(countries.Albania, "Tirana"));
cities.push(new City(countries.Andorra, "Andora"));
cities.push(new City(countries.Sweden, "Sztokholm"));

export {cities};
