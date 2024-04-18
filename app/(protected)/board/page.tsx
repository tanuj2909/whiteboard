"use client";
import { useCurrentUser } from "@/hooks/use-current-user";

const BoardPage = () => {

    const user = useCurrentUser();
    return ( 
        <div>
            {JSON.stringify(user)}
        </div>
     );
}
 
export default BoardPage;