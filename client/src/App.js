import React, { Component } from 'react';
import './App.css';
import FloatingButton from './FloatingButton.js';
import WorldMap from './WorldMap.js';
import Magnets from './Magnets.js';

import {countries} from './repository/CountriesRepository';
import {cities} from './repository/CitiesRepository';
import {City} from "./model/City";

class App extends Component {
  state = {cities: []};

  componentDidMount() {
    cities.then((cts) => {
      let cities = cts.map(u => {
        let country = countries[u.country];
        return new City(country, u.city);
      });

      this.setState({cities: cities});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Magnets cities={this.state.cities} />
          <WorldMap />
          <FloatingButton/>
        </div>
      </div>
    );
  }
}

export default App;
