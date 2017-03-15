import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import "./vendor/css/skeleton_css/normalize.css"
import "./vendor/css/skeleton_css/skeleton_css.css"

import Main from './components/Main/Main';


ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
  </Router>,
  document.getElementById('app'));
