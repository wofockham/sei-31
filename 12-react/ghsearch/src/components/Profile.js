import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <h2>{ this.props.match.params.username }'s Profile</h2>
    );
  }
};
