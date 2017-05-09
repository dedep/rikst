import React, { Component } from 'react';
import './App.css';
import Country from './Country.js';
import {cities} from './CitiesRepository';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="countries-group jumbotron">
            <div className="row">
              {
                cities.map(item => <Country key={item.name} country={item.country} city={item.name} />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
