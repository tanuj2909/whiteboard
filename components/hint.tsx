import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface HintProps {
    label: string;
    children: React.ReactNode;
    asChild?: boolean;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
}

export const Hint = ({
    label,
    children,
    asChild,
    side,
    align
}: HintProps) => {
  return (
    <TooltipProvider
        delayDuration={300}
    >
        <Tooltip>
            <TooltipTrigger asChild={asChild}>
                {children}
            </TooltipTrigger>
            <TooltipContent
                className="text-[#775ea0] bg-[#dfdbe5]"
                side={side}
                align={align}
            >
                <p className="font-semibold">
                    {label}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}
