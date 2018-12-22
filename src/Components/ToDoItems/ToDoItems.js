import React, { Component, Fragment } from 'react';

export default class ToDoItems extends Component {
  render() {
    return (
      <Fragment>
        <li className="todo__item">
          <input type="checkbox" />
          <p>Placeholder text here</p>
        </li>
      </Fragment>
    )
  }
}
