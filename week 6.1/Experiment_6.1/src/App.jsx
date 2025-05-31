import './App.css'
import { Header } from './Header'
import { useState } from 'react'
import { memo } from 'react'
import { HeaderRerender } from './HeaderRerender'


function App() {

   const [title, setTitle] = useState("hello");

   function updateTitle() {
      setTitle("Hello this  " + Math.random());
   }

  return (
    // <>
    //   <Header title="This is react app"></Header>
    //   <Header title="Let's create some design"></Header>
    // </>
    //        ------------------Also writte as ---------------------------------------
    <div>
      {/* <HeaderRerender></HeaderRerender> */}
      <button onClick={updateTitle}>Click to change title</button>
      {/* <Header title="Let's create some design"></Header> */}

      <HeaderTitle title={title}></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
      <HeaderTitle title="should not rerender"></HeaderTitle>
    </div>
  )
}


//when you want to a compent which can not re-render which are not chnages use React.memo(function define (component))

const HeaderTitle = memo(function HeaderTitle({title}) {
  return <div> {title} </div>
});

export default App
