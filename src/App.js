import React, { Component } from 'react';
import './App.css';
import CityTile from './CityTile.js';
import FloatingButton from './FloatingButton.js';

import {countries} from './repository/CountriesRepository';
import {City} from "./model/City";

class App extends Component {

  state = {users: []};

  componentDidMount() {
    fetch('/cities')
      .then(res => res.json())
      .then(cts => {
        let cities = cts.map(u => {
          let country = countries[u.country];
          return new City(country, u.city);
        });

        this.setState({users: cities});
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="countries-group jumbotron">
            <div className="row">
              {
                this.state.users
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
