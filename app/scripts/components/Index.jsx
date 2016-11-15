'use strict';

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

require('normalize.css');
require('../../../node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css');
require('../../assets/scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const Routes = require('../config/Routes.jsx');

ReactDOM.render(
  Routes,
  document.getElementById('App')
);
