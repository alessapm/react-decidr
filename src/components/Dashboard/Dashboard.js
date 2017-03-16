import React from 'react';
import Nav from '../Nav/Nav';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lex: 'spoon'
    }
  }

  render () {
    return (
      <div>
        <Nav />
        <h1>This is your dashboard.</h1>
      </div>
    )
  }
}
