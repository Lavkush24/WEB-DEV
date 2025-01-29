import { useEffect } from "react";
import { RenderTodos } from "./RenderTodos";
import { useState } from "react";

export function Todos() {
    const [todos,setTodos] = useState([]);
  
    // setTimeout(() => {
    //   fetch("http://localhost:8080/todos")
    //     .then(async (res) => {
    //       const todos = await res.json();
    //       setTodos(todos);
    //     })
    // }, 10000);

    
    useEffect(() => {
      setTimeout(() => {
        fetch("http://localhost:8080/todos")
          .then(async (res) => {
            const todos = await res.json();
            setTodos(todos);
          })
      }, 10000);
    },[todos]);
  
    return (
      <div>
        {todos.map((todo) => {
          return <RenderTodos key={todo._id} id={todo._id} title={todo.title} description={todo.description} completed={todo.completed}/>
        })}
      </div>
    )
  };