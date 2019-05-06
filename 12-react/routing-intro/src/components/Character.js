import React, { Component } from 'react';

class Character extends Component {
  render() {
    return (
      <h2>Star Wars Character: { this.props.match.params.name.toUpperCase() }</h2>
    );
  }
}

export default Character;
