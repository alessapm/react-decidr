import React, { Component } from 'react';
import UserLinks from './UserLinks';

export default class Nav extends Component {
  constructor() {
    super()

    this.state = {
      jokeNotebook: [
        'Chris Will Have The Meatloaf',
        '#SheepLife',
        'At Least Get Out Of Bed Today',
        'Don\'t worry, we\'ll handle it',
        'Choose not, want not',
        'Food > Choices',
        'Choice Not Included',
        'We choose, you eat',
        'Choose a nothing.',
        'Choice Not Included',
        'We pick so you don\'t have to!',
        'Choice is for bots',
        'Don\'t think. Eat.',
        'Free will, Schmee Will',
        'Single Option dining',
        'Free will is not a choice.',
        'CHOICE IS WASTED ON YOU.',
        'Debate ends',
        'There can be only one'
      ],
      tagline: ''
    }
  }

  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * this.state.jokeNotebook.length);
    this.setState({ tagline: this.state.jokeNotebook[randomIndex]});
  }

  render() {
    return(
      <div>

        <header>
          <div className="flexManWChild">
            <div className="titleImage strongBorder">
              <h1>DECIDR</h1>
            </div>

            <div className=" phraseGen " >
              <h2>{this.state.tagline}</h2>
            </div>
          </div>
            <UserLinks />
        </header>

      </div>
    )
  }

}
