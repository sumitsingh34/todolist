import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import { Edit } from './MyComponents/Edit';
import React, {useState, useEffect } from 'react'; // it's a hook


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  }
  else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    settodos(todos.filter((item) => {
      return item.sno !== todo.sno // item !== todo 
    }))
  }

  let onUpdate = (todo) => {
    console.log(todo)
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    let mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    settodos([...todos, mytodo]);
  }

  const [todos, settodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <Router>
      <>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route path="/" element={<Todos todos={todos} onDelete={onDelete}/>}/>
          <Route path="/addtodo" element={<AddTodo addTodo={addTodo} />}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </>
    </Router>

  );
}
export default App;
