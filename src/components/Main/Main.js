import React, { Component } from 'react';
import update from 'react-addons-update';

import Place from '../Place/Place';
import Nav from '../Nav/Nav';

export default class Main extends Component {
  constructor(props) {
    super(props);


    this.state = {
      search: {
        zip: '',
        category: 'restaurant'
      },
      place: {}
    }

    this.state.place ? console.log(this.state) : console.log('Did not retrieve Place from API');
  }

  handleChange(event){
    let newState = update(this.state, {
      search: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    })

    this.setState(newState)
    console.log(this.state);
  }


  findPlaces() {
  fetch(`http://localhost:8000/restaurants/zip/${this.state.search.zip}/${this.state.search.category}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(r => r.json()
        .then((places) => {
          const randomIndex = Math.floor(Math.random() * places.length);
          console.log(randomIndex);
          const place = places[randomIndex]
          console.log(place)
          this.setState({ place })
        })
      )
      .catch((err) => console.log(err));
  }


  render() {
    return(
      <div>
        <Nav />
        <input maxLength="5" type="text" name="zip" onChange={this.handleChange.bind(this)} value={this.state.search.zip} placeholder="ZIP"/>
        <button name="category" value="restaurant" onClick={this.handleChange.bind(this)}>restaurant</button>
        <button name="category" value="bar" onClick={this.handleChange.bind(this)}>bar</button>
        <button onClick={this.findPlaces.bind(this)}>FIND</button>

        <Place place={this.state.place} />
      </div>
    )
  }
}
