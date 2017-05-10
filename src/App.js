import React, { Component } from 'react';
import './App.css';
import CityTile from './CityTile.js';
import FloatingButton from './FloatingButton.js';
import {cities} from './repository/CitiesRepository';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="countries-group jumbotron">
            <div className="row">
              {
                cities
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(item => <CityTile key={item.name} country={item.country} city={item.name} />)
              }
            </div>
          </div>
          <FloatingButton/>
        </div>
      </div>
    );
  }
}

export default App;
