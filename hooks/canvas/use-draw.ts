import { socket } from "@/lib/socket";
import { useEffect, useState } from "react";
import { useOptions } from "@/store/canvas-options";

let moves: [number, number][] = []; 
export const useDraw = (
    ctx: CanvasRenderingContext2D | undefined,
    isBlocked: boolean,
    movedX: number,
    movedY: number,
    handleEnd: () => void,
) => {
    const options = useOptions()
    const [drawing, setDrawing] = useState(false);

    useEffect(() => {
        if(ctx) {
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.lineWidth = options.lineWidth;
            ctx.strokeStyle = options.lineColor;
        }
    }, [ctx, options.lineColor, options.lineWidth]);

    const handleStartDrawing = (x: number, y: number) => {
        if( !ctx || isBlocked ) return;

        moves = [[x + movedX, y + movedY]];

        setDrawing(true);

        ctx.beginPath();
        ctx.lineTo(x + movedX, y + movedY);
        ctx.stroke();
    }

    const handleEndDrawing = (x: number, y: number) => {
        if(!ctx) return;

        socket.emit("draw", moves, options);

        setDrawing(false);
        ctx.closePath();
        handleEnd();
    }

    const handleDraw = (x: number, y: number) => {
        if(ctx && drawing && !isBlocked) {
            moves.push([x + movedX, y + movedY])
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }

    return {
        handleDraw,
        handleEndDrawing,
        handleStartDrawing,
        drawing
    }
}