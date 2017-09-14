import React, { Component } from 'react';

import Search from './Search';

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="Nav__title">Weather App</div>
        <Search inline={true} />
      </div>
    )
  }
}
