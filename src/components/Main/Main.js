import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`http://localhost:8000/restaurants/zip/11103`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json()
      .then((data) => {
        console.log(data);
      })
    )
    .catch((err) => console.log(err));
  }

  render() {
    return(
      <div>
        <h1>Welcome To Decidr</h1>
      </div>
    )
  }
}
