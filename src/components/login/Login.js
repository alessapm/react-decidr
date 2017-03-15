import React, { Component } from 'react';
import update from 'react-addons-update';

import Nav from '../Nav/Nav';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {}
    }
  }

handleChange(event){
    let newState = update(this.state, {
        user: {
          $merge: {
            [event.target.name]: event.target.value
          }
        }
    });

  this.setState(newState);
} //closes handleChange

handleSubmit(event){
  event.preventDefault();

    fetch('http://localhost:8000/users/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data) => {
      //data should contain our token
      console.log(data)
    })
    .catch((err) => {
      console.log(err);
    })

}//closes handleSubmit

render() {
    return(
      <div>
        <Nav />
        <h2>Login to Decidr</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Email: </label><br />
          <input name='email'
          onChange={this.handleChange.bind(this)}
          type='text' /><br /><br />

          <label>Password: </label><br />
          <input name='password'
          onChange={this.handleChange.bind(this)}
          type='password' /><br /><br />

          <button type='submit'>Login</button>

        </form>

      </div>
    )
}

} //closes class Login
