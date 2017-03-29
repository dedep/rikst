import React, { Component } from 'react';
import './App.css';
import Country from './Country.js';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <Country/>
                        <Country/>
                        <Country/>
                        <Country/>
                        <Country/>
                        <Country/>
                        <Country/>
                        <Country/>
                        <Country/>
                        <Country/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
