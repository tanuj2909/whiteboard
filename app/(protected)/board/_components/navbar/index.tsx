import { FiMenu } from "react-icons/fi";
import { Logo } from "./logo";
import { Palette } from "./palette";
import { Button } from "@/components/ui/button";
import { Collab } from "./collab";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-20 z-[49] bg-[#775ea0] px-2 lg:px-4 flex justify-between items-center shadow-sm">
            <Logo />
            <Palette />
            <Collab />
        </nav>
    );
}