import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'



export const Edit = (props) => {

    let myStyle = {
        minHeight : "70vh",
        margin : "40px auto"
      }
    const location = useLocation()
    const data = location.state?.data;
 
    const [title, setTitle] = useState(data.title)
    const [desc, setDesc] = useState(data.desc)
    const sno = data.sno

    const submit = (e) => {
        e.preventDefault();
        if (title == '' || desc == '') {
            alert('title and description cannot be empty!')
        }
        else {
            //updateTodo(title, desc, sno)
            alert('Todo updated successfully!')
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
                <button type="submit" className="btn btn-sm btn-success">Update Todo</button>
                {' '}<Link className="btn btn-sm btn-primary" to="/"> Check My Todos List </Link>
            </form>
        </div>
        
    )
}
