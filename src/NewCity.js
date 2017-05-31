import React from 'react';
import Select from 'react-select';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

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
          <img className="search-flag" src={this.props.value.flag} alt="" />
          {this.props.children}
				</span>
      </div>
    );
  }
});

var NewCity = createClass({
  getInitialState () {
    return {
      country: undefined
    };
  },

  updateValue (newValue) {
    this.setState({
      country: newValue
    });
  },

  render() {
    let options = allCountries.map(c => ({
      value: c.code,
      label: c.country.name,
      flag: c.country.flag
    }));

    return (
      <div className="NewCity">
        <div className="container">
          <div className="jumbotron">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <Select
                  name="form-field-name"
                  value={this.state.country}
                  searchable={true}
                  clearable={false}
                  options={options}
                  onChange={this.updateValue}
                  valueComponent={CountryFlag}
                  placeholder="Wybierz państwo"
                  noResultsText="Nie znaleziono państwa"
                />
              </div>
            </div>

            <div className="row city-input">
              <div className="col-md-12 col-lg-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Miasto" />
                </div>
              </div>
            </div>

            <div className="form-group submit">
              <button type="button" className="col-md-3 col-sm-8 col-xs-12 btn btn-primary">ZAPISZ</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default NewCity;
