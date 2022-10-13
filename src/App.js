import "./App.css";
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId){
      const editTodo = todos.find((i)=> i.id === editId)
      const updateTodos = todos.map((j)=>j.id === editTodo.id ? (
        j={id:j.id,todo}):{id:j.id,todo:j.todo}
      );
      setTodos(updateTodos)
      setEditId(0)
      setTodo("")
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
  }

  const handleDelect = (id)=> {
    const delectTodo = todos.filter((i)=> i.id!== id);
    setTodos([...delectTodo])
  }

  const handleEdit = (id)=> {
    const editTodo = todos.find((i)=> i.id === id);
    setTodo(editTodo.todo)
    setEditId(id)
  }
  
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List Website</h1>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)}/>
          <button type="submit">{editId ? "Edit" : "Go"}</button>
        </form>

        <ul className="allTodo">
        {todos.map((t) => (
            <li className="singleTodo" key={t.id}>
              <span className="Todolist" >{t.todo}</span>
              <button onClick={()=>handleEdit(t.id)}>Edit</button>
              <button onClick={()=>handleDelect(t.id)}>Delect</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
