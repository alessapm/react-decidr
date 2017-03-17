import React, { Component } from 'react';
const mapKey = process.env.key;


class Place extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: {}
    };

    console.log(this.props.place);
  }


  price(n) {
    let money = "";
     if (!n) {
        money = "unavailable"
      } else {
        for (var i=0; i < n; i++){
          money += "$";
        }
      }
    return money;
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({ restaurant: this.props.place });

    fetch(`http://localhost:8000/restaurants/${localStorage.user_id}`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      console.log('something has been favorited')
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    console.log('PROPS: ', this.props)


    if (this.props.place.rating !== undefined) {

      const name = this.props.place.name.replace(/&/g, '%26');
      console.log(name);

      return (
        <div>
          <h1>{this.props.place.name}</h1>
          <p>{this.props.place.formatted_address}<br />
          Rating: {this.props.place.rating}</p>
          <p>Price: {this.price(this.props.place.price_level)} </p>
          <iframe
          width="600"
          height="450"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=${name}%20near%20${this.props.place.formatted_address}&center=${this.props.place.geometry.location.lat},${this.props.place.geometry.location.lng}`} allowFullScreen>
          </iframe>

          <button onClick={this.handleSubmit.bind(this)}>
            Favorite
          </button>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

export default Place;
