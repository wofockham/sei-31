import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'; // Change this to a Heroku URL once deployed.

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };
    this.saveSecret = this.saveSecret.bind(this);

    // request secrets from the server
    axios.get(SERVER_URL).then((results) => {
      console.log( results );
    });
    // make those secrets the new state
  }

  saveSecret(content) {
    // turn the content into a secret object
    const secret = {
      id: Math.random(),
      content: content
    };

    // TODO: ES6
    const newSecrets = this.state.secrets.slice(0); // es5 copy
    newSecrets.push( secret );

    // add the secret to the state (the collection of secrets)
    this.setState({ secrets: newSecrets })
  }

  render() {
    return (
      <div>
        <h1>Tell Us All Your Secrets</h1>
        <SecretForm onSubmit={ this.saveSecret }/>
        <Gallery secrets={ this.state.secrets } />
      </div>
    );
  }
};

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.content );
    this.setState({ content: '' });
  }

  _handleChange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.secrets.map( (s) => <p key={ s.id }>{ s.content }</p> ) }
      </div>
    );
  }
}

export default Secrets;
