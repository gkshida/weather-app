import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    return (
      <form className={`Search ${this.props.inline ? "Search--inline" : ""}`}>
        <input
          className="Search__input"
          type="text"
          placeholder="St.George, Utah"
        />
        <button
          className="Search__btn Search__btn--success">
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
