import React, { Fragment } from 'react';

const ToDoItems = (props) => {
  console.log(props)
  return (
    <Fragment>
      <li className="todo__item">
        <input type="checkbox" />
        <p>{props.text}</p>
      </li>
    </Fragment>
  )
}

export default ToDoItems
