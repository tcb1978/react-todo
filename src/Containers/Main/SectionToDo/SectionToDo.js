import React, { Component, Fragment } from 'react';
import ToDoItems from '../../../Components/ToDoItems/ToDoItems';
import './SectionToDo.scss';
import json from '../../../Data/ToDos.json';

export default class SectionToDo extends Component {
  render() {
    const ToDoListItems = json.todosData.map(item => {
      return (
        <ToDoItems
        key={item.id}
        text={item.text}
        completed={item.completed}/>
      )
    })
    return (
      <Fragment>
        <section className="section section__todo">
          <div className="todo__inner">
            <ul className="todo__list">
              {ToDoListItems}
            </ul>
          </div>
        </section>
      </Fragment>
    )
  }
}
