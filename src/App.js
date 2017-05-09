import React, { Component } from 'react';
import './App.css';
import Country from './Country.js';
import * as countries from './Countries';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="countries-group jumbotron">
                        <div className="row">
                            <Country country={countries.all.Albania} city="Tirana" />
                            <Country country={countries.all.UnitedKingdom} city="Londyn" />
                            <Country country={countries.all.Poland} city="Olsztyn" />
                            <Country country={countries.all.UnitedKingdom} city="Londyn" />
                            <Country country={countries.all.UnitedKingdom} city="Londyn" />
                            <Country country={countries.all.UnitedKingdom} city="Londyn" />
                            <Country country={countries.all.UnitedKingdom} city="Londyn" />
                            <Country country={countries.all.UnitedKingdom} city="Londyn" />
                            <Country country={countries.all.UnitedKingdom} city="Londyn" />
                            <Country country={countries.all.UnitedKingdom} city="Londyn" />
                            <Country country={countries.all.UnitedKingdom} city="Londyn" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
