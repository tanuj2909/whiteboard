import { Share } from "./share";
import { User } from "./user";


export const Collab = () => {
    return (
        <div className="flex gap-x-4">
            <Share />
            <User />  
        </div>
    );
}