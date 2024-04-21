import { 
    FaRegHandPaper, 
    FaLongArrowAltRight,
    FaRegSquare,
    FaRegCircle
} from "react-icons/fa";
import { 
    LuPencil,
    LuEraser 
} from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { 
    PiCursor,
    PiTextAaBold
 } from "react-icons/pi";
import { title } from "process";
import { useMemo } from "react";
import { Hint } from "@/components/hint";

interface PaletteButton {
    label: string;
    icon: React.ReactNode;
}



export const Palette = () => {
    const PaletteItems: PaletteButton[] = useMemo(() => [
        {
            label: "Hand",
            icon: <FaRegHandPaper />
        }, {
            label: "Selection",
            icon: <PiCursor className="font-bold"/>
        }, {
            label: "Rectangle",
            icon: <FaRegSquare />
        }, {
            label: "Ellipse",
            icon: <FaRegCircle />
        }, {
            label: "Arrow",
            icon: <FaLongArrowAltRight />
        }, {
            label: "Draw",
            icon: <LuPencil />
        }, {
            label: "Text",
            icon: <PiTextAaBold />
        }, {
            label: "Insert Image",
            icon: <CiImageOn className="font-bold"/>
        }, {
            label: "Eraser",
            icon: <LuEraser />
        },
    ], []);

    return (
        <div className="bg-[#dfdbe5] p-2 rounded-lg">
            <ul className="flex gap-x-4">
                {PaletteItems.map((item) => (
                    <li
                        key={item.label}
                        className="text-2xl rounded-lg p-2 text-[#775ea0] hover:bg-[#775ea0]/30 hover:cursor-pointer"
                    >
                        <Hint
                            label={item.label}
                            side="bottom"
                            align="center"
                            asChild
                        >
                            <span>{item.icon}</span>
                        </Hint>
                    </li>
                ))}
            </ul>
        </div>
    );
}