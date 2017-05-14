import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewCity from './NewCity';
import './index.css';
import { BrowserRouter, Route, Match} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} exact={true} />
      <Route path="/new" component={NewCity} exact={true} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
