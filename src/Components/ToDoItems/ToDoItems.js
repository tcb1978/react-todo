import React, { Component, Fragment } from 'react';

export default class ToDoItems extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      completed: false
    });
  }

  onChange = () => {
    this.setState( prevState => {
      return {
        completed: !prevState.completed,
      }
    });
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    }
    return (
      <Fragment>
        <li className="todo__item">
          <input
            type="checkbox"
            checked={this.state.completed}
            name="checkbox"
            onChange={this.onChange}
          />
          <p style={this.state.completed ? completedStyle : null}>{this.props.text}</p>
        </li>
      </Fragment>
    )
  }
}

