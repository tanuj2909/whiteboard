"use client";

import { Share } from "./share";
import { UserAvatar } from "./user-avatar";
import { useCurrentUser } from "@/hooks/use-current-user";

export const Collab = () => {

    const user = useCurrentUser();

    return (
        <div className="flex gap-x-4">
            <Share />
            <UserAvatar imageUrl={user?.image || ""}/>  
        </div>
    );
}