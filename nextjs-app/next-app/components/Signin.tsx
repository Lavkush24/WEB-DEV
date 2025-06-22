
"use client"

export default function Signin() {
    return (
        <div className="h-9/10 mt-40 flex flex-col justify-center gap-8">
            <div className="text-center">
                <div className="text-5xl font-extrabold pb-3">
                   Welocome Back!    
                </div>
                <div className="font-bold opacity-30 text-xl">
                    Don't have an account? 
                </div>
            </div>
            <div className="flex justify-center mt-">
                
                <div className="flex flex-col gap-4">
                    <InputBox 
                        message="address@example.com" 
                        id="Email" 
                        type="email"
                    />
                    <InputBox 
                        message="" 
                        id="Password" 
                        type="password"
                    />
                    <div className="flex flex-col gap-4">
                        <button 
                            onClick={() => {
                                console.log("hi there")
                            }}
                            className="
                            mt-2
                            bg-black text-white rounded-xl pl-4 pr-4 pt-2 pb-2
                            border-transparent
                            cursor-pointer
                            hover:border-black border-4
                        ">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function InputBox({message, id,type}: {message: string, id: string, type: string}) {
    return (
        <div className="flex flex-col w-md h-[70px]">
            <label htmlFor={id} className="font-bold text-lg">{id}</label>
            <input 
                name={id} id={id} 
                type={type || "text"}
                className="rounded-xl 
                    border-2
                    hover:border-4 
                    hover:rounded-xl 
                    pl-4 pr-4 pt-2 pb-2" 
                placeholder={message}
                >
            </input>
        </div>
    )
}