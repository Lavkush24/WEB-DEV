import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const AUTH_OPT = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "email", type: "text", placeholder: "email" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials: any) {

                return {
                    id: "user1",
                    name: "lavkush",
                    email: "hello@gmail.com"
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })

    ],
    secret: process.env.AUTH_SECRET,
    callbacks: {
        session({session,token,user}: any) {
            if(session && session.user) {
                session.user.id = token.sub;
            }
            return session
        }
    }
}