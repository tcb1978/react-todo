import React, { Component, Fragment } from 'react';

export default class ToDoItems extends Component {
  render() {
    return (
      <Fragment>
        <li className="todo__item">
          <input
            type="checkbox"
            checked={this.props.completed}
            name="checkbox"
            onChange={this.handleChange}
          />
          <p>{this.props.text}</p>
        </li>
      </Fragment>
    )
  }
}

