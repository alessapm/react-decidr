import React, { Component } from 'react';

import Nav from '../Nav/Nav';
import { browserHistory } from 'react-router';
import Place from '../Place/Place'


const mapKey = process.env.key;
export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: {},
      favorites: []
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

            this.setState({
              favorites: fav,
              place: fav[0]
            });

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
   this.setState({
    place: favorites
   })
  }

  lastPlace() {
    this.setState({
      place: favorites
    })
  }

  render () {
    return (
  <div>
    <Nav />
    <div className="flexWCommentBox">
    <Place place={this.state.place} />
    <div className="editButton">
    <div className="next-last-buttons">
      <button onClick={this.nextPlace.bind(this)} />
      <button onClick={this.lastPlace.bind(this)} />
    </div>
    </div>
    </div>
  </div>
    )
  }

} //closes component
