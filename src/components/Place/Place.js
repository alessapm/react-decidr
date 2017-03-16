import React, { Component } from 'react';

class Place extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   place: {}
    // };

    // this.setState({ place: this.props.place })

  }

price(n) {
    let money = "";
    for (var i=0; i < n; i++){
      money += "$";
    }
    return money;
  }



  render() {
    if (this.props.place.rating !== undefined) {
      return (
        <div>
          <h1>{this.props.place.name}</h1>
          <p>{this.props.place.formatted_address}<br />
          Rating: {this.props.place.rating}</p>
          <p>Price: {this.price(this.props.place.price_level)} </p>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

export default Place;
