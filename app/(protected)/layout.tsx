import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";
import { SessionProvider } from "next-auth/react";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {

    const session = await auth();
    return ( 
        <>
            <SessionProvider session={session}>
                <Navbar />
                {children}
            </SessionProvider>
        </>
     );
}
 
export default ProtectedLayout;