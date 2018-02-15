import React, { Component } from 'react';
import api from '../utils/api';

import PropTypes from 'prop-types';

export default class Search extends Component {
  constructor(props) {
    super();

    this.state = {
      city: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState(() => {
      return {
        city: value,
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    api.getCurrentWeather(this.state.city)
      .then((weather) => {
        console.log(weather);
      })
  }

  render() {
    return (
      <form
        className={`Search ${this.props.inline ? "Search--inline" : ""}`}
        onSubmit={this.handleSubmit}>
        <input
          id='city'
          className="Search__input"
          type="text"
          placeholder="St.George, Utah"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <button
          className="Search__btn Search__btn--success"
          type='submit'
          disabled={!this.state.city}>
          Get Weather
        </button>
      </form>
    )
  }
}

Search.propTypes = {
  inline: PropTypes.bool.isRequired,
}

Search.defaultProps = {
  inline: false,
}
