"use server"

import  client from "@/db"

export async function signupCall(username: string, password: string) {
    try {
        await client.userNext.create({
            data: {
                username: username,
                password: password
            }
        });

        return true
    }catch(e) {
        return false
    }
}