import React from 'react';
import Select from 'react-select';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import {sortBy} from 'lodash';

import {addCity, allCities} from './repository/CitiesRepository';
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
          {this.props.children}
          <img className="search-flag" src={this.props.value.source.flag} alt=""/>
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
      city: '',
      availableCities: []
    };
  },

  updateCountry(newValue) {
    this.setState({
      country: newValue,
      city: ''
    });
    this.updateAvailableCitiesState(newValue);
  },

  updateCity(newValue) {
    this.setState({
      city: newValue.value
    });
  },

  saveCity(event) {
    addCity(new City(this.state.country.source, this.state.city))
      .then(() => {
        location.href = '/';
      });

    event.preventDefault();
  },

  updateAvailableCitiesState(country) {
    allCities.then(cities => {
      let available = cities
        .filter(city => city.country === country.value)
        .map(c => c.name);

      this.setState({
        availableCities: available
      });
    });
  },

  render() {

    let countryOptions = sortBy(allCountries, 'country.name')
      .map(c => ({
      value: c.code,
      label: c.country.name,
      source: c.country
    }));

    let cityOptions = this.state.availableCities
      .map(c => ({
        value: c,
        label: c
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
                    options={countryOptions}
                    onChange={this.updateCountry}
                    valueComponent={CountryFlag}
                    placeholder="Wybierz państwo"
                    noResultsText="Nie znaleziono państwa"
                  />
                </div>
              </div>

              <div className="row city-row">
                <div className="col-md-12 col-lg-6">
                  <Select
                    name="form-field-city"
                    value={this.state.city}
                    searchable={true}
                    clearable={false}
                    options={cityOptions}
                    onChange={this.updateCity}
                    placeholder="Wybierz miasto"
                    noResultsText="Nie znaleziono miasta"
                  />
                </div>
              </div>

              <div className="form-group submit">
                <button disabled={!this.state.country || !this.state.city} type="submit" className="md-btn">ZAPISZ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default NewCity;
