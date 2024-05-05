"use client";
import { RecoilRoot } from "recoil";

const CanvasLayout = ({ children }: { children: React.ReactNode }) => {

    return ( 
        <>
            <RecoilRoot>
                <div className="h-full bg-board ">
                    {children}
                </div>
            </RecoilRoot>
        </>
     );
}
 
export default CanvasLayout;