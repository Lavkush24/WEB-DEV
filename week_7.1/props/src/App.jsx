import { useState } from 'react'
import './App.css'
import { CountContext } from './Context'
import { useContext } from 'react'


/* to acces the context variable we need to use the wrap all child who want use varuable wrap
in the provider  */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{count,setCount}}>
        <Count></Count>
      </CountContext.Provider>
    </>
  )
}

function Count() {
  return (
    <div>
      <CountRenderer/>
      <Button></Button>
    </div>
  )
}

function CountRenderer() {
  const {count} = useContext(CountContext);  //using the context of varible
  return ( 
    <div>
      {count}
    </div>
  )
}

function Button() {
  const {count,setCount} = useContext(CountContext);
  return (
    <>
      <button onClick={() => {
          setCount(count+1)
      }}>increase count</button>
      <button onClick={() => {
          setCount(count-1)
      }}>decrease count</button>
    </>
  )
}
export default App


/* 
what is prop drilling ? 
it is the making code applealing worst in some cases like a grand child eant access the parent state
variable that passig him through the parents and parent don't need it this is called prop drillling 
 as above example shown the coutn and button casesd.

 Prop does not the rerendring the compenents.


 To solve this problem here comes the context api in frame tha help to pass props in deep down 
 with context. by it we are teleport data
*/