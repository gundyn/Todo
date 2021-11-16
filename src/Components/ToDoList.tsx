import * as React from 'react'

import ToDoItem from './ToDoItem'
import { TodoListInterface } from '../interface'

const ToDoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
          <ToDoItem
            todo={todo}
            handleTodoUpdate={props.handleTodoUpdate}
            handleTodoRemove={props.handleTodoRemove}
            handleTodoComplete={props.handleTodoComplete}
          />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
