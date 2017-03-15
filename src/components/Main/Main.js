import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);


  


    this.state = {
      zip: 0
    }
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
