import { useState } from 'react';

export function Assignment1() {
    const [factorial, setFactorial] = useState(1);

    const fact = (n) => {
        let factorial = 1;
        for(let i=1; i<=n; i++) {
            factorial *= i;
        }
        return factorial;
    }

    return (
        <div>
            <input type="text" onChange={(e) => {
                setFactorial(fact(e.target.value));
            }} />
            <br />
            <b>Factorial is !:</b> {factorial}
        </div>
    )
};