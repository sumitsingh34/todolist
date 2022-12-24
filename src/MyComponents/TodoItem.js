import React from 'react'
import { Link } from "react-router-dom";


export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-warning" onClick={() => onDelete(todo)}> Delete </button>
      {' '}
      <Link  className="btn btn-sm btn-danger" to="/edit" state={{data:todo}}> Edit </Link>
      <hr></hr>      
    </div>
  )
}
