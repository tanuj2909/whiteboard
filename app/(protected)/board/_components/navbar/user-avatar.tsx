import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa";

interface UserAvatarProps {
    imageUrl?: string;
}

export const UserAvatar = ({
    imageUrl
}: UserAvatarProps) => {

    const onClick = () => {
        signOut();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="hover:cursor-pointer">
                    <AvatarImage src={imageUrl} className="object-cover" />
                    <AvatarFallback className="text-[#775ea0] bg-[#dfdbe5]">
                        <FaUser />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#dfdbe5] text-[#775ea0]">
                <DropdownMenuLabel className="hover:cursor-default">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                    className=" text-red-500 hover:bg-red-500/20"
                    onClick={onClick}
                >Log out</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
    );
}

