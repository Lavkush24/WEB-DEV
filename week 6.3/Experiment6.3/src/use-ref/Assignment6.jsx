// Create a component with a text input field and a button. When the component mounts or 
// the button is clicked, automatically focus the text input field using useRef.
import { useEffect,useRef } from "react";

export function Assignment6() {
    const inputRef = useRef();

    //this make by default cursor in input box
    useEffect(() => {
        // document.getElementById("inputBox").focus();
        inputRef.current.focus();
    },[]);

    const cursorHandler = () => {
        // document.getElementById("inputBox").focus();
        inputRef.current.focus();
    }
    return (
        <div>
            <input id="inputBox" ref={inputRef} type="text" />
            <button onClick={cursorHandler}>Focus input</button>
        </div>
    )
}

