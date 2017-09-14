import React, { Component } from 'react';

const styles = {
  container: {
    backgroundImage: "url('app/images/pattern.svg')",
  },
};

export default class Home extends Component {
  render() {
    return (
      <div className="home-container" style={styles.container}>
        <h1>Enter a City and State</h1>
        <form className="Search Search__form">
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
      </div>
    )
  }
}
