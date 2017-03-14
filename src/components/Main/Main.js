import React, { Component } from 'react';
const key = process.env.key;

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: 0
    }
  }

handleChange(){

}

handleSubmit(){
  // setState zip: zipInput
  // fetch(`localhost:8000/restaurants/${this.state.zip}`)
}


  render() {
    return(
      <div>
        <h1>Welcome To Decidr</h1>
      </div>
    )
  }
}
