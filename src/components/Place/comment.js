import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.place.comment) {
      return (
        <div>
          <p>COMMENT: {this.props.place.comment}</p>
        </div>
      )

    } else {
      return(<div></div>)
    }
  }
}

export default Comment;
