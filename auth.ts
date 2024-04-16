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
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error"
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
})