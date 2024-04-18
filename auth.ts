import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import { db } from "./lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
 
export const { 
    auth, 
    handlers: { GET, POST }, 
    signIn, 
    signOut 
} = NextAuth({
    callbacks: {
        async session({ token, session }) {
            if(token.sub && session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        async jwt({ token }) {
            return token;
        }
    },
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error"
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
})