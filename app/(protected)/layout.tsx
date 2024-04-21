import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

const BoardLayout = async ({ children }: { children: React.ReactNode }) => {

    const session = await auth();
    return ( 
        <>
            <SessionProvider session={session}>
                <RecoilRoot>
                    <Navbar />
                    <div className="h-full bg-board ">
                        {children}
                    </div>
                </RecoilRoot>
            </SessionProvider>
        </>
     );
}
 
export default BoardLayout;