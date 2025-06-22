

export default function layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <div className="bg-black text-white text-center p-2">
                10% off for next 2 Days!
            </div>
            {children}
        </div>
    )
}