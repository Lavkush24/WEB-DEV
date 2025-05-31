import { useCallback, useEffect, useMemo,useState,memo } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [id , setId] = useState(1);

  const [num , setNum] = useState(1);
  const [counter, setCounter] = useState(0);

 // if we wrap it in callback function then it will not rerender the component


// function logit() {
//   console.log("log it");
// }


const logit = useCallback(() => { 
  console.log("log it");  
},[]); 

  const sum = useMemo(() => {
    console.log("run");
    let c = 0;
    for(let i=1; i<=num; i++) {
      c = c + i;
    }  
    return c;
  },[num]);
      

  return (
   <div>
    <Demo log={logit}></Demo>
    <br /><br /><br />
    <input onChange={(e) => {
      setNum(e.target.value);
    }}/>
    <div>sum is: {sum}</div>

    <br /><br />

    <button onClick={() => {
      setCounter(counter + 1);
    }}>counter: {counter}</button>

    <br /><br />

    <button onClick={() => {
      setId(1);
    }}>1</button>
    <button onClick={() => {
      setId(2);
    }}>2</button>
    <button onClick={() => {
      setId(3);
    }}>3</button>
    <button onClick={() => {
      setId(4);
    }}>4</button>
    <Todos2 id={id}></Todos2>
   </div>
  )
}

const Demo = memo(function Demo({log}) {
  console.log("Demo render");
  return (
    <div>
      <p> hi there{log}</p>
    </div>
  )
});

function Todos() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/todos")
  //     .then( async (res) => {
  //       const json = await res.json();
  //       console.log(json);
  //       setTodos(json);
  //     });
  // }, []);

  //fetch data using axios library
  useEffect(() => {
    axios.get("http://localhost:8080/randomtodos")
      .then((response) => {
        setTodos(response.data);
      })
  }, []);

  return (
    <div>
    {
      todos.map((todo) => {
        return <div>
          <h2>{todo.title}</h2>
          <h4>{todo.description}</h4>
          <button>{todo.completed === false? "mark as completed": "Completed"}</button>
        </div>
      })
    }
    </div>
  )
};


// function which take id and render the component
function Todos2({ id }){
  const [todo, setTodo] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch(`http://localhost:8080/todo/${id}`)
  //     .then(async (res) => {
  //       const todos = await res.json();
  //       setTodo(todos);
  //     });
  //   }, 5000);   
  // },[id]);

  useEffect(() => {
    axios.get(`http://localhost:8080/todo/${id}`)
      .then((res) => {
        setTodo(res.data);
      })
  },[id]);  // here id is the dependency which re-render the whenever id changes....

  return (
    <div>
      id: {id}
      <h2>{todo.title}</h2>
      <h4>{todo.description}</h4>
    </div>
  )
}

export default App
