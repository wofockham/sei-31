import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  _increment = () => {
    this.props.dispatch({type: 'INCREMENT'});
  }

  _decrement = () => {
    this.props.dispatch({type: 'DECREMENT'});
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this._decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this._increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}

// export default Counter;
// You don't have to understand this.
export default connect(mapStateToProps)(Counter); // Higher order functions
