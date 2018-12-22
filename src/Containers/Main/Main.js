import React, { Component, Fragment } from 'react';
import SectionToDo from './SectionToDo/SectionToDo';
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <main className="main">
          <SectionToDo/>
        </main>
      </Fragment>
    )
  }
}
