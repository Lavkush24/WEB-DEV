import { useState } from 'react'

export function HeaderRerender() {
    const [title, setTitle] = useState("this is code");

    function changeTitle() {
      setTitle("Set this number " + Math.random());
    }

    return (
      <>
        <button onClick={changeTitle}>Click to change title</button>
        <h3>{title}</h3>
      </>
    )
}