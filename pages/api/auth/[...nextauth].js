import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    provider: [
        GoogleProvider({
            clientid: process.env.GOOGLE_CLIENT_ID,
            clientsecret:process.env.GOOGLE_CLIENT_SECRET
        }),
    ]
})