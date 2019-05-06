import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor() {
    super();
    this.state = { weatherData: null };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(city) {
    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
    const weatherParams = {
      q: city,
      units: 'metric',
      appid: '87f3530b034ce83f07479771285f8bdf'
    };
    axios.get(weatherURL, {params: weatherParams}).then((result) => {
      // console.log here is useful to see exactly what's been returned
      this.setState({weatherData: result.data}); // Note that the actual weather info is in result.data
    });
  }

  render() {
    return (
      <div>
        <h1>SHOW ME SOME WEATHER</h1>
        <SearchForm onSubmit={ this.fetchWeather } />
        <WeatherInfo data={ this.state.weatherData } />
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInput = this._handleInput.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.query );
  }

  _handleInput(event) {
    this.setState( { query: event.target.value } );
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Glasgow" required onInput={ this._handleInput } />
        <input type="submit" value="Go" />
      </form>
    )
  }
}

const WeatherInfo = (props) => {
  // conditional rendering:
  if (props && props.data === null) {
    return ''; // no results to show yet
  } else {
    return (
      <div>
        <h2>Weather for { props.data.name }</h2>
        <h3>Currently: { props.data.main.temp }&deg;C</h3>
        <img src={ `http://openweathermap.org/img/w/${ props.data.weather[0].icon }.png` } />
        <h4>{props.data.weather[0].main}: {props.data.weather[0].description}</h4>
      </div>
    );
  }
};

export default Weather;
