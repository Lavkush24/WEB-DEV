import { useState } from "react"

export function Button({
    head,
    count
}) {
    const [selected,setSelected] = useState(false);

    return (
        <>
            <button 
            className={`rounded-xl text-xs ps-2 pe-2 pt-1 pb-1 font-medium ${selected ? 'bg-blue-700 text-white': 'bg-gray-200'}`}
            onClick={() => {
                setSelected(!selected);
            }}
            >{head}({count})</button>
        </>
    )
}