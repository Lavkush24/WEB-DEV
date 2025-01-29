// Create a component that tracks and displays the number of times it has been rendered.
//  Use useRef to create a variable that persists across renders without causing additional 
// renders when it changes.
import { useState, useRef } from "react";

export function Assignment7() {
    const [count , setCount] = useState(0);

    const rerederedcount = useRef(0);

    const rerenderedHandler = () => {
        setCount(count + 1);
    }

    rerederedcount.current = rerederedcount.current + 1;

    return(
        <div>
            <p>this component is rerednered {rerederedcount.current} times</p>
            <button onClick={rerenderedHandler}>Rerender</button>
        </div>
    )
}
