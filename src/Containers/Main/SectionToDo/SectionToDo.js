import React, { Component, Fragment } from 'react';
import ToDoItems from '../../../Components/ToDoItems/ToDoItems';
import './SectionToDo.scss';

export default class SectionToDo extends Component {
  render() {
    return (
      <Fragment>
        <section class="section section__todo">
          <div className="todo__inner">
            <ul className="todo__list">
              <ToDoItems/>
              <ToDoItems/>
              <ToDoItems/>
              <ToDoItems/>
            </ul>
          </div>
        </section>
      </Fragment>
    )
  }
}
