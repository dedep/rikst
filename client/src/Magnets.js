import React, { Component } from 'react';
import CityTile from './CityTile.js';
import './Magnets.css';

class Magnets extends Component {
  render() {
    return (
      <div className="countries-group jumbotron">
        <div className="row">
          {
            this.props.cities
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(item => <CityTile key={item.name} country={item.country} city={item.name} />)
          }
        </div>
      </div>
    );
  }
}

export default Magnets;
