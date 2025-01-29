/* Create a component with a text input field and a button. 
The goal is to display an alert with the text entered when the button is clicked. 
Use useCallback to memoize the event handler function that triggers the alert, 
ensuring it's not recreated on every render.
Currently we only have inputText as a state variable and hence you might not see the 
benefits of useCallback.
We're also not passing it down to another component as a prop which is another 
reason for you to not see it's benefits immedietely. */

import { use } from "react";
import { useCallback, useState } from "react";


export function Assignment5() {
    const [text, setText] = useState("");

    const create = useCallback(() => {
        setText(text);
        return alert(text);
    },[text]);

  

    return (
        <div> 
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} placeholder="Enter some text"/>
            <button onClick={create}>Create Alert</button>
        </div>
    )
}