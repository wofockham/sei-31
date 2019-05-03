import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    super(); // This runs the original React Component constructor which React needs to set up.
    this.state = {
      clicks: 0
    };
    // Every event handler that needs access to `this` should be bound in the constructor.
    this._incrementClicks = this._incrementClicks.bind(this);
  }

  _incrementClicks() {
    // this.state.clicks += 1; // Mutation: won't work
    this.setState({clicks: this.state.clicks + 1});
  }

  render() {
    console.log('render() has been called');
    return (
      <button onClick={ this._incrementClicks }>{ this.hotdogs.clicks } clicks so far</button>
    )
  }
};

export default Clickr;
