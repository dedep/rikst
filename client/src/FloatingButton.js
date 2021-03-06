import React, { Component } from 'react';
import './FloatingButton.css';
import { Link } from 'react-router-dom'

class FloatingButton extends Component {
  render() {
    return (
      <div id="container-floating">
        <Link to="/new">
        <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="Create">
          <p className="plus">+</p>
          <img className="edit" src="http://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" />
        </div>
        </Link>
      </div>
    );
  }
}

export default FloatingButton;
