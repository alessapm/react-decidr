import React, { Component } from 'react';
import update from 'react-addons-update';

import Place from '../Place/Place';
import Nav from '../Nav/Nav';

export default class Main extends Component {
  constructor(props) {
    super(props);


    this.state = {
      search: {
        zip: '04038',
        category: 'restaurants'
      },
      place: {}
    }

    console.log(this.state);
  }

  handleChange(event){
    let newState = update(this.state, {
      search: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    })

    console.log(this.state);
    this.setState(newState);
  }


  findPlaces() {
  fetch(`http://localhost:8000/restaurants/zip/${this.state.search.zip}/restaurant`, {
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

        <searchbarflex>

          <div id="search">
            <div id="zipBar" >
              <form action="POST" >
                <label for="zipCode" className="toggleHolderText "></label>
                <input className="zipInput" type="text" name="zip" onChange={this.handleChange.bind(this)} value={this.state.search.zip} maxLength="5" placeholder="ENTER ZIP NOW." />
              </form>

            </div>

            <div className="toggleHolder" id="toggleBar" > <h3 className="toggleHolderText">Restaurant</h3>
              <label className="switch">
                <input type="checkbox" />
                <div className="slider round"></div>
              </label>
                <h3 className="toggleHolderText">Bars</h3>
            </div>
          </div>

          <div >
            <label for="submitButton" placeholder="DECID"></label>
            <input id="submitButton" type="submit" value="" onClick={this.findPlaces.bind(this)} />
          </div>

      </searchbarflex>




        <Place place={this.state.place} />
      </div>
    )
  }
}
