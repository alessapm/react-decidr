import React, { Component } from 'react';
const key = process.env.key;

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=11109&key=${key}&type=restaurant&opennow=true`, {
        method: 'GET'
      })
    .then((results) => {
      results
      .json()
      .then((data) => {
        console.log(data);
      })
    })
  }


  render() {
    return(
      <div>
        <h1>Welcome To Decidr</h1>
      </div>
    )
  }
}
