export function Card({
    title,
    amount,
    countOrder
}) {
    return (
        <>
            <div className="shadow-sm bg-white-500 rounded-md p-2 ps-4 pe-4">
                <div className="flex ps-5 text-grey-100 text-sm font-medium">
                    {title} <div className="text-grey-500 text-2xs p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg></div>
                </div>
                <div className="flex justify-between ps-4">
                    <div className="font-bold text-2xl">₹ {amount}</div>

                    { countOrder ? <div className="flex font-medium underline">{countOrder} Orders
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    </div>: null}
                </div>
            </div>
        </>
    )
}


export function CardColor({
    title,
    amount,
    countOrder,
    date
}) {
    return (
        <div>
            <div className="shadow-sm bg-blue-800 rounded-t-md p-2">
                <div className="flex text-blue-50 text-sm font-medium ps-4 pe-4">
                    {title} <div className="text-2xs p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg></div>
                </div>
                <div className="flex justify-between text-blue-50 ps-4">
                    <div className="font-bold text-2xl">₹ {amount}</div>

                    { countOrder ? <div className="flex font-medium underline">{countOrder} Orders
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    </div>
                    : null}
                </div>
            </div>
            <div className="bg-blue-950 text-blue-50 text-sm ps-4 pe-4 pt-2 pb-2 rounded-b-md font-md flex justify-between">
                <div>Next Payment Date: </div>
                <div>{date}</div>
            </div>
        </div>
    )
}

