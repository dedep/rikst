import React from 'react';
import Select from 'react-select';
import createClass from 'create-react-class';

import 'react-select/dist/react-select.css';

import {allCountries} from './repository/CountriesRepository';

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
      label: c.country.name
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
            />
          </div>
        </div>
      </div>
    );
  }
});

export default NewCity;
