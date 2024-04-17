import { Navbar } from "./board/_components/navbar";

const BoardLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <>
            <Navbar />
            <div className="h-full bg-board mt-20">
                {children}
            </div>
        </>
     );
}
 
export default BoardLayout;