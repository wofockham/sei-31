import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'; // Change this to a Heroku URL once deployed.
// const SERVER_URL = 'http://8a0d9fc1.ngrok.io/secrets.json';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };
    this.saveSecret = this.saveSecret.bind(this);

    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ secrets: results.data });
        setTimeout(fetchSecrets, 4000); // recursion
      });
    };

    fetchSecrets();
  }

  saveSecret(content) {
    // add the secret to the state (the collection of secrets)
    axios.post(SERVER_URL, {content: content}).then((result) => {
      // ES6 Spread operator
      this.setState({secrets: [...this.state.secrets, result.data]});
    });
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
