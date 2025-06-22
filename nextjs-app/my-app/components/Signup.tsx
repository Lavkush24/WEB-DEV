"use client"

import { useRef, useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";
import { signupCall } from "@/app/actions/user";


export default function() {
    const inputRefs: React.RefObject<HTMLInputElement | null>[] = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];
    const buttonRef = useRef<HTMLButtonElement>(null);

    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handeleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if(e.key === "Enter") {
            e.preventDefault();
            const isLastInput = index === inputRefs.length-1;
            if(isLastInput) {
                buttonRef.current?.click()
            }else {
                inputRefs[index+1].current?.focus();
            }
        }
    }
    return (
        <div className="flex justify-center items-center h-screen gap-4">
            <div className="flex flex-col gap-2 bg-gray-200 pt-20 pb-20 ps-10 pe-10 rounded-xl">
                <div className="text-4xl text-center font-bold mb-5">
                    Signup
                </div>
                <input onChange={(e) => {
                    setUsername(e.target.value);
                }} 
                ref={inputRefs[0]}
                onKeyDown={(e) => handeleKeyPress(e,0)}
                className="border-2 mb-3 rounded-md h-10 p-2" type="text" placeholder="Lavkush@gmail.com" />
                <input onChange={(e) => {
                    setPassword(e.target.value);
                }} 
                ref={inputRefs[1]}
                onKeyDown={(e) => handeleKeyPress(e,1)}
                className="border-2 mb-3 rounded-md h-10 p-2" type="password" placeholder="password"/>
                <button
                    ref={buttonRef}
                    onClick={() => {
                        signupCall(username,password)
                        router.push("/")
                    }}
                
                    className="bg-black w-20 h-10 rounded-2xl text-white">Signup</button>
             </div>
        </div>
    )
}