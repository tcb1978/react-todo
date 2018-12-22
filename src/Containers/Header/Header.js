import React, { Component, Fragment } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <nav className="nav">Navbar</nav>
        </header>
      </Fragment>
    );
  }
}