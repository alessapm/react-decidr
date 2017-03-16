import React, { Component } from 'react';
const mapKey = process.env.key;


class Place extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   place: {}
    // };

    // this.setState({ place: this.props.place })

    console.log('Mapkey:', mapKey);
  }











  render() {
    if (this.props.place.rating !== undefined) {
      return (
        <div>
          <h1>{this.props.place.name}</h1>
          <p>{this.props.place.formatted_address}<br />
          Rating: {this.props.place.rating}</p>
          <iframe
          width="600"
          height="450"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=${this.props.place.name}${this.props.place.formatted_address}&center=${this.props.place.geometry.location.lat},${this.props.place.geometry.location.lng}`} allowFullScreen>
          </iframe>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

export default Place;
