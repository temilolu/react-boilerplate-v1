'use strict';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const App = require('../components/App.jsx');
const Home = require('../components/Home.jsx');

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" componnent={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);
