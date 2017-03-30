import React, { Component } from 'react';
import './Country.css';
import 'flag-icon-css/css/flag-icon.css';

class Country extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                <div className="Country">
                    <div className="name">{this.props.country.name}</div>
                    <div className="capital">{this.props.city}</div>
                    <img className="flag" src={this.props.country.flag} alt={this.props.country.name} />
                </div>
            </div>
        );
    }
}

export default Country;
