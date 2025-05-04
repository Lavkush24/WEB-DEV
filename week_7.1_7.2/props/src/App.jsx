import { useState } from 'react'
import './App.css'
import { CountContext } from './Context'
import { useContext } from 'react'
import { countAtom, evenSelector } from './store/atoms/count'
import { useRecoilValue,useRecoilState,RecoilRoot} from 'recoil'

/* to acces the context variable we need to use the wrap all child who want use varuable wrap
in the provider  */
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <CountContext.Provider value={{count,setCount}}>
        <Count></Count>
      </CountContext.Provider> */}

      {/* Recoil implementation */}

      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </>
  )
}

// function Count() {
//   console.log("count is re-rendered")
//   return (
//     <div>
//       <CountRenderer/>
//       <Button></Button>
//     </div>
//   )
// }

// function CountRenderer() {
//   const {count} = useContext(CountContext);  //using the context of varible
//   return ( 
//     <div>
//       {count}
//     </div>
//   )
// }

// function Button() {
//   const {count,setCount} = useContext(CountContext);
//   return (
//     <>
//       <button onClick={() => {
//           setCount(count+1)
//       }}>increase count</button>
//       <button onClick={() => {
//           setCount(count-1)
//       }}>decrease count</button>
//     </>
//   )
// }


/**  Implementation of recoil state (atoms) */
function Count() {
  console.log("no rerendered");
  return (
    <div>
      <CountRenderer/>
      <Button></Button>
      <EvenRenderer/>
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return ( 
    <div>
      {count}
    </div>
  )
}

function Button() {
  const [count,setCount] = useRecoilState(countAtom);
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


function EvenRenderer() {
  // const count = useRecoilValue(countAtom);.
  // return (
  //   // <div>
  //   //   {(count %2 == 0 ? "count even ": null)}
  //   // </div>

  // )
  // {/* also write as */}
  // if(count %2 == 0){
  //   return <div>count even</div>
  // }
  // else{
  //   return <div>count odd</div>
  // }

  //using even selector ---------------------------
  const isEven = useRecoilValue(evenSelector);
  return (
    <div>
      {isEven? "count even": "count odd"};
    </div>
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

 why do you use context api ? 
  to make syntac cleaner and get rid of prop drilling. 
  not for the prevent the re-rendering of the compenents .


  For getting both work are done we use 
  -------------------State management library------------------------------
  state management is the cleaner way to store your state and componenet of react seperately and
  cleaner way . 
  - libraries like recoil, redux, zustand

  -------------------RECOIL----------------------------------
  it has a concept of atom which store the states
  defined outside the component. similar to useState variable \
  things to learn 
  - RecoilRoot
  - atom
  - useRecoilState
  - useRecoilValue
  - useSetRecoilState
  - selector
*/