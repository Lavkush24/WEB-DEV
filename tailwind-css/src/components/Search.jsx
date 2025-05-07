export function Search({
    placeText,
    width,
}) {
    return (
        <>
            <div className={`flex relative`}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="currentColor" 
                    className="size-2 absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-600">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
                <input 
                    type="text" 
                    placeholder=
                        {`${placeText}`} 
                    className={`bg-gray-200 rounded-sm text-xs ps-6 pe-2 pt-2 pb-2`}
                    style={{width:width}}
                />
            </div>
        </>
    )
}