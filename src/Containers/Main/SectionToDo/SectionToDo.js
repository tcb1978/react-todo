import React, { Component, Fragment } from 'react';
import ToDoItems from '../../../Components/ToDoItems/ToDoItems';
import './SectionToDo.scss';
import todosData from '../../../Data/ToDos.json';

export default class SectionToDo extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      id: todosData.id,
      text: todosData.text,
      completed: todosData.completed
    });
  }
  render() {
    const toDoListItems = todosData.todosData.map(item => {
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
              {toDoListItems}
            </ul>
          </div>
        </section>
      </Fragment>
    )
  }
}
