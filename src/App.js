import React, { Component } from 'react';
import './App.css';
import Country from './Country.js';
import * as flags from './Flags';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <Country name="Albania" capital="Tirana" flag={flags.albaniaFlag} />
                        <Country name="Andora" capital="Andora" flag={flags.andorraFlag} />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
