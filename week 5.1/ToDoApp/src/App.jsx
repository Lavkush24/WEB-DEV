import { useState } from 'react'
import './App.css'

function App() {

  const [ToDos, SetTodos] = useState([{
    title: "Go to gym",
    description: "between 10 to 12 pm",
    completed: false
  },
  {
    title: "Do DSA",
    description: "between 8 to 10pm",
    completed: true
  },
  ]);

  function addtodo() {
    {const t = alert("<input></input>");}
    SetTodos([...ToDos, {
      title: t,
      description: "Random to do s",
    }]);
  };


  return (
    <div>
      <button onClick={addtodo}>Add new todo</button>
      {/* <ToDoApp title={ToDos[0].title} description={ToDos[0].description}></ToDoApp>
      <ToDoApp title={ToDos[1].title} description={ToDos[1].description}></ToDoApp> */}
      {
        ToDos.map(function (todo) {
          return (
            <ToDoApp title={todo.title} description={todo.description}/>
          )
        })
      }
    </div>
  )
}

function ToDoApp(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.description}</h4>
    </div>
  )
}

export default App
