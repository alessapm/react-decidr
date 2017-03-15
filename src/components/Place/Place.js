import React, { Component } from 'react';

class Place extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   place: {}
    // };

    // this.setState({ place: this.props.place })

  }



  render() {
    if (this.props.place.rating !== undefined) {
      return (
        <div>
          <h1>{this.props.place.name}</h1>
          <p>{this.props.place.formatted_address}<br />
          Rating: {this.props.place.rating}</p>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

export default Place;
