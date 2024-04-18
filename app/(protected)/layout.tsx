import { auth } from "@/auth";
import { Navbar } from "./board/_components/navbar";
import { SessionProvider } from "next-auth/react";

const BoardLayout = async ({ children }: { children: React.ReactNode }) => {

    const session = await auth();
    return ( 
        <>
            <SessionProvider session={session}>
                <Navbar />
                <div className="h-full bg-board pt-20">
                    {children}
                </div>
            </SessionProvider>
        </>
     );
}
 
export default BoardLayout;