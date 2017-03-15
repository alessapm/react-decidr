import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import Main from './components/Main/Main';
import Login from './components/login/Login';


ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/login" component={Login} />
  </Router>,
  document.getElementById('app'));
