import { useState } from "react";

export function AddNewTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return (
      <div>
        <input id="title" type="text" placeholder='title' onChange={(e) => {
          setTitle(e.target.value)
        }}/> <br /><br />
        <input id="description" type="text" placeholder='description' onChange={(e) => {
          setDescription(e.target.value)
        }}/> <br /><br />
        <button 
            onClick={() => {
              fetch("http://localhost:8080/todo", {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  description: description
                }),
                headers: {
                  "Content-type": "application/json"
                }
              }).then(async (res) => {
                const todo = await res.json();
                alert("New todo is created....");
              })
            }}>Add new Todo</button> <br /><br />
      </div>
    )
  };