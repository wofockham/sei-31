import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0
    };
    this._updateA = this._updateA.bind(this);
    this._updateB = this._updateB.bind(this);
  }

  _updateA(event) {
    const a = Number(event.target.value);
    this.setState({ a: a });
  }

  _updateB(event) {
    const b = Number(event.target.value);
    this.setState({ b: b });
  }

  render() {
    console.log('rendering!');
    const { a, b } = this.state; // Destructuring.
    return (
      <div>
        <h1>Not So Crappy Reactive Calculator</h1>
        <input type="number" onChange={ this._updateA } value={ this.state.a || "" } />
        <input type="number" onChange={ this._updateB } value={ this.state.b || "" } />
        <h2>Results:</h2>
        <p>{ a } + { b } = { a + b }</p>
        <p>{ a } - { b } = { a - b }</p>
        <p>{ a } * { b } = { a * b }</p>
        <p>{ a } / { b } = { a / b }</p>
      </div>
    );
  }
}

export default Calculator;
