import { useState } from 'react';
import './App.css'


// let state = {
//   count: 0
// }

function App() {

  const [count, setCount] = useState(0);

  // function onClickHandler() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}


function CustomButton(arg) {

  function onClickHandler() {
    arg.setCount(arg.count + 1);
  }

  return (
    <button onClick={onClickHandler}>
      Counter {arg.count}
    </button>
  )
}

export default App
