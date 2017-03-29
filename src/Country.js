import React, { Component } from 'react';
import './Country.css';
import 'flag-icon-css/css/flag-icon.css';
import flag from 'flag-icon-css/flags/4x3/al.svg';

class Country extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                <div className="Country">
                    <div className="name">Albania</div>
                    <div className="capital">Tirana</div>
                    {/*<span className="flag flag-icon flag-icon-al" />*/}
                    <img className="flag" src={flag} alt="Albania Flag" />
                </div>
            </div>
        );
    }
}

export default Country;
