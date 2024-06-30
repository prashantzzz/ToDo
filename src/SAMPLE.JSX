import "./styles.css";
import gzlogo from "./assets/todo.png";
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]); // [] is the datatype of todos

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = e.target.elements.task.value;
    if (newTask) {
      setTodos([...todos, newTask]); //todos.append(newTask)
      e.target.reset();
    }
  }

  function deleteTask(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <>
      <header>
        <p><img className="logo" src={gzlogo} alt="Logo" />ToDo</p>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button>Login</button>
      </header>

      <form onSubmit={handleSubmit}>
        <input className="taskinput" name="task" placeholder="Enter task here" spellCheck="false" />
        <button type="submit">Add</button>
        <button type="reset">Reset</button>
      </form>

      <div className="tasklist" id="tasklist">
        {todos.map((todo, index) => (
          <label key={index} className="eachtask">
            <span><input type="checkbox" /> {todo}</span>
            <button className="deletebtn" onClick={() => deleteTask(index)}>Delete</button>
          </label>
        ))}
      </div>
    </>
  );
}
