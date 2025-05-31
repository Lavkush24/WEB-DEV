// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

import { useState, useMemo } from "react";

let list = [
    {
        name: "Apple",
        value: 10
    },
    {
        name: "Banana",
        value: 20
    },
    {
        name: "Orange",
        value: 30
    },
    {
        name: "Mango",
        value: 40
    },
    {
        name: "Chips",
        value: 67
    },
];

export function Assignment3() {
    const [items, setItems] = useState(list);


    const total_value = useMemo(() => {
        let total_value = 0;
        for(let i=0; i<items.length; i++) {
            total_value += items[i].value; 
        }
        return total_value;
    },[items]);


    return (
        <div>
            <ul>
                {items.map((item) => {
                    return <li>{item.name} - Price : {item.price} </li>
                })}
            </ul>
             Total Value: {total_value}
        </div>
    )
};