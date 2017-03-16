import React from 'react';
import { browserHistory } from 'react-router';


const Logout = () => {
  if(localStorage.getItem('token')) localStorage.removeItem('token');
  browserHistory.push('/');
}

export default Logout;
