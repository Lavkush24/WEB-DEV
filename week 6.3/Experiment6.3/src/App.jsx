import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Assignment1 } from './Component/Assignment1'
import { Assignment2 } from './Component/Assignment2'
import { Assignment3 } from './Component/Assignment3'
import { Assignment4 } from './Usememo/Assignment4'
import { Assignment5 } from './Usememo/Assignment5'
import { Assignment6 } from './use-ref/Assignment6'
import { Assignment7 } from './use-ref/Assignment7'

function App() {
  const [count, setCount] = useState(0)
  
  const divRef = useRef();
  const [income, setIncome] = useState(2000);

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => { 
    setTimeout(() => {
      divRef.current.innerHTML = 4;
      // document.getElementById('income_container').innerHTML = 2;
    }, 5000);
  }, []);

 

  return (
    <div>

      <Assignment7></Assignment7>

      {/* <Assignment4></Assignment4> */}

      {/* <Assignment1></Assignment1>
      <br /><br />
      <Assignment2></Assignment2>
      <br /><br />
      <Assignment3></Assignment3> */}
      {/* Your income tax return is : <div ref={divRef}> {income}</div>  */}
    </div>
  )
}

export default App
