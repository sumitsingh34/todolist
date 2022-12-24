import React, { useState } from 'react'
import { Link } from "react-router-dom";


export const AddTodo = ({ addTodo }) => {

    let myStyle = {
        minHeight : "70vh",
        margin : "40px auto"
      }
    

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (title == '' || desc == '') {
            alert('title and description cannot be empty!')
        }
        else {
            addTodo(title, desc)
            setTitle("")
            setDesc("")
        }
    }
    return (
        <div className='container' style={myStyle}>
            <h4>Add Todo</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                {' '}<Link className="btn btn-sm btn-primary" to="/"> Check My Todos List </Link>
            </form>
        </div>
        
    )
}
