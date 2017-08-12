import React from 'react';
import Select from 'react-select';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import {sortBy} from 'lodash';

import {addCity} from './repository/CitiesRepository';
import {City} from './model/City';

import 'react-select/dist/react-select.css';
import './NewCity.css';

import {allCountries} from './repository/CountriesRepository';

const CountryFlag = createClass({
  propTypes: {
    children: PropTypes.node,
    value: PropTypes.object
  },

  render () {
    return (
      <div className="Select-value">
				<span className="Select-value-label">
          <img className="search-flag" src={this.props.value.source.flag} alt=""/>
          {this.props.children}
				</span>
      </div>
    );
  }
});

var NewCity = createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      country: undefined,
      city: ''
    };
  },

  updateCountry(newValue) {
    this.setState({
      country: newValue
    });
  },

  updateCity(event) {
    this.setState({
      city: event.target.value
    });
  },

  saveCity(event) {
    addCity(new City(this.state.country.source, this.state.city))
      .then(() => {
        location.href = '/';
      });

    event.preventDefault();
  },

  render() {
    let options = sortBy(allCountries, 'country.name')
      .map(c => ({
      value: c.code,
      label: c.country.name,
      source: c.country
    }));

    return (
      <div className="NewCity">
        <div className="container">
          <div className="jumbotron">
            <form onSubmit={this.saveCity}>
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <Select
                    name="form-field-name"
                    value={this.state.country}
                    searchable={true}
                    clearable={false}
                    options={options}
                    onChange={this.updateCountry}
                    valueComponent={CountryFlag}
                    placeholder="Wybierz państwo"
                    noResultsText="Nie znaleziono państwa"
                  />
                </div>
              </div>

              <div className="row city-input">
                <div className="col-md-12 col-lg-6">
                  <div className="form-group">
                    <input value={this.state.city} onChange={this.updateCity} type="text" className="form-control" placeholder="Miasto"/>
                  </div>
                </div>
              </div>

              <div className="form-group submit">
                <button type="submit" className="col-md-3 col-sm-8 col-xs-12 btn btn-primary">ZAPISZ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default NewCity;
