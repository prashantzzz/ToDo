import "./styles.css";
import gzlogo from "./assets/todo.png"
import { useState } from 'react'

// prop: Used to pass to a function/component for setting initial value, displays value
// state: Used inside a function/component for updating the value, state changes-> rerenders

export default function App(){
  const [cnt, setcnt]=useState(0); //cnt=0
  const [todos, settodos]=useState([]); //[] is the datatype of todos
  const [inpt, setinpt]=useState("");
  const [dte, setdate]=useState("");
  //settodos("hello"); -> sets the value of todos to "hello"
  
  function handleSubmit(e){
    e.preventDefault();
    const parsedate= (datevar) => new Date(datevar);
    let tmp=e.target.elements.task.value; //user input
    tmp=tmp.trim();
    if(tmp){
      const updatedtasks=[...todos, { text:tmp, completed:false, marktxt:"Mark", date1:dte }];
      settodos(updatedtasks.sort((a,b)=>parsedate(a.date1)-parsedate(b.date1))); //todos=[...todos,x] => todos.append(x)
      //here x is an object with 2 attributes
      setcnt(cnt+1);
      e.target.reset();
    }
    setinpt("");
  }

  function deleteit(index){
    const todolist=[...todos];
    todolist.splice(index,1); //remove 1 element from given index
    settodos(todolist);
    setcnt(cnt-1);
  }

  function editit(index){
    const todolist=[...todos];
    setinpt(todolist[index].text);
    setdate(todolist[index].date1);
    //the text from clicked task should get filled into input then following deletion should happen
    todolist.splice(index,1); //remove current element from task list
    settodos(todolist);
    setcnt(cnt-1);
  }

  function markdone(index){
    const todolist=[...todos];
    todolist[index]= {...todolist[index], completed:!todolist[index].completed, marktxt:todolist[index].completed ? "Mark": "Undo"}; //remove 1 element from given index
    settodos(todolist);
    if(todolist[index].completed) setcnt(cnt-1);
    else setcnt(cnt+1);
  }

  return ( //this is returnig JSX
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

      <body>
      <form onSubmit={handleSubmit}>
        <input className="taskinput" name="task" autocomplete="off" value={inpt}
        placeholder="Enter your goals.." spellCheck="false" onChange={(e)=>setinpt(e.target.value)} />
      
      <input type="date" value={dte} onChange={(e)=>setdate(e.target.value)} /><span className="dateinput">Due Date </span>
      <button type="submit">Add</button>
      </form>
      <h3>Remaining: {cnt}</h3>

      <div className="tasklist" id="tasklist">
        {todos.map((newtask,index)=>(
          <label key={index} className="eachtask">
            <span style={{  fontWeight:newtask.completed ? '400': '600',
                            textDecoration:newtask.completed? 'line-through':'none',
                            color:newtask.completed? 'lightgrey':'white'
            }}>
              <span><input type="checkbox" checked={newtask.completed} onChange={()=>markdone(index)} />{newtask.text}</span> 
              <div className="dte">{newtask.date1}</div>
            </span>
            <div>
              
              <button className="markbtn" onClick={()=>markdone(index)}>{newtask.marktxt}</button> 
              <button className="editbtn" onClick={()=>editit(index)}>Edit</button> 
              <button className="deletebtn" onClick={()=>deleteit(index)}>Delete</button> 
            </div>
          </label>
        ))}

      </div>

      </body>
    </>
  );
}
