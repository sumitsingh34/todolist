import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight : "70vh",
    margin : "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h4 className="my-3">Todos List</h4>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <TodoItem  key={todo.sno} todo={todo} onDelete={props.onDelete}/>            
          )
        })
      }
    </div>
  )
}
