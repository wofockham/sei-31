import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = { username: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/details/${ this.state.username }`); // Navigate to the profile.
  }

  render() {
    return (
      <div className="search">
        <h2>Search Github by username</h2>
        <form onSubmit={ this._handleSubmit }>
          <input type="search" onChange={ this._handleChange } value={ this.state.username }/>
          <button>Search for { this.state.username }</button>
        </form>
      </div>
    );
  }
};
