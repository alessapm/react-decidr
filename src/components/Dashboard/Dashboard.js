import React, { Component } from 'react';

import Nav from '../Nav/Nav';
import { browserHistory } from 'react-router';
import Place from '../Place/Place'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: {},
      favorites: [],
      lat: '',
      lng: ''
    }
  }


  componentWillMount(){
    if (!localStorage.getItem('token')) {
      browserHistory.push('/login');
    }
  } // closes componentWillMount

  componentDidMount(){
    fetch('http://localhost:8000/users/restrict', {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((results) => {
      results.json().then((content) => {

        console.log('content.message: ', content.message)

        fetch(`http://localhost:8000/restaurants/${localStorage.user_id}`, {
          method: 'GET'
        })
        .then((favorites) => {
          favorites.json().then((fav) => {
             console.log('***fav: ', fav);

            if(fav) {
              this.setState({
                favorites: fav,
                place: fav[0],
                lat: fav[0].lat,
                lng: fav[0].lng
              });
            };
          })
        })
      })
    })
    .catch((err) => {
      console.log('fail in catch', err);
      browserHistory.push('/login');
    })
  } //closes componentDidMount

  nextPlace() {
    let index = this.state.favorites.indexOf(this.state.place);
    const endOfArray = this.state.favorites.length -1;
    index === endOfArray ? index = 0 : index++;

   this.setState({
    place: this.state.favorites[index]
   })
  }

  lastPlace() {
    let index = this.state.favorites.indexOf(this.state.place);
    const endOfArray = this.state.favorites.length -1;
    index === 0 ? index = endOfArray : index--;

   this.setState({
    place: this.state.favorites[index]
   })
  }

  render () {
    return (
  <div>
    <Nav />
    <div className="flexWCommentBox">
    <Place place={this.state.place} lat={this.state.lat} lng={this.state.lng}/>
    <div className="editButton">
    <div className="next-last-buttons">
      <button onClick={this.nextPlace.bind(this)}>NEXT</button>
      <button onClick={this.lastPlace.bind(this)}>LAST</button>
    </div>
    </div>
    </div>
  </div>
    )
  }

} //closes component
