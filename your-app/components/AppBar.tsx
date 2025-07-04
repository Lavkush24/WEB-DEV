"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export const AppBar = () => {
    const session = useSession();
    const router = useRouter();
    return <div>
        <button className="h-3xl w-2xs rounded-2xl bg-amber-200 text-black" onClick={() => {
            signIn();
        }}>Signin</button>

        <button className="h-3xl w-2xs rounded-2xl bg-amber-200 text-black" onClick={() => {
            signOut();
        }}>Logout</button>

        <div>
            {JSON.stringify(session)}
        </div>
    </div>
}