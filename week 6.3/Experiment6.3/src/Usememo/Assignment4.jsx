/* Create a counter component with increment and decrement functions. Pass these functions 
to a child component which has buttons to perform the increment and decrement actions. 
Use useCallback to ensure that these functions are not recreated on every render. */

import { useCallback, useState } from 'react';

export function Assignment4() {
    const [counter, setCounter] = useState(0);


    const increaeCounter = useCallback(() => {
        // setCounter(counter + 1);
        setCounter((currntCounter) => {
            return currntCounter + 1;
        });
    },[]);

    const decreaseCounter = useCallback(() => {
        // setCounter(counter - 1);1
        setCounter(currentCounter => currentCounter - 1);
    }, []);

    return (
        <div>
            <button onClick={decreaseCounter}>-1</button>
            <br /><br />
             Counter: {counter} 
             <br /><br />
             <button onClick={increaeCounter}>+1</button>
        </div>
    )
};