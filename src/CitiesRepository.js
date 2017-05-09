import {City} from "./City";
import * as countries from './Countries';

let cities = [];
cities.push(new City(countries.all.Albania, "Tirana"));
cities.push(new City(countries.all.Ukraine, "Lwów"));

export {cities};
