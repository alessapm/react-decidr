import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class UserLinks extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: '',
    }

  }

  componentWillMount() {
    let loggedIn = localStorage.getItem('token') ? true : false;
    this.setState({ loggedIn });
  }

  Logout () {
  localStorage.removeItem('token');
  localStorage.removeItem('firstname');
  localStorage.removeItem('lastname');
  browserHistory.push('/');
  }

  render () {
    if (this.state.loggedIn) {
      return (
        <div>
          <button><Link to="/dashboard" className="hoverable loginModule">Dashboard</Link></button>
          <button onClick={this.Logout.bind(this)} className="hoverable loginModule">Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/login" className="hoverable loginModule">Login</Link>
          <Link to="/new" className="hoverable loginModule">Create User</Link>
        </div>
      )
    }
  }

}

export default UserLinks;
