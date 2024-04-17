import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

export const User = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="hover:cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#dfdbe5] text-[#775ea0]">
                <DropdownMenuLabel className="hover:cursor-default">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className=" text-red-500 hover:bg-red-500/20">Log out</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
    );
}

