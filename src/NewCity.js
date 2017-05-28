import React from 'react';
import Select from 'react-select';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

import 'react-select/dist/react-select.css';
import './NewCity.css';

import {allCountries} from './repository/CountriesRepository';

const GravatarValue = createClass({
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
          <div className="countries-group jumbotron">
            <Select
              name="form-field-name"
              value={this.state.country}
              searchable={true}
              clearable={false}
              options={options}
              onChange={this.updateValue}
              valueComponent={GravatarValue}
            />
          </div>
        </div>
      </div>
    );
  }
});

export default NewCity;
