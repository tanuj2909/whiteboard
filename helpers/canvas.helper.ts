import { CtxOptions } from "@/types";

export const drawFromSocket = (
    socketMoves: [number, number][],
    socketOptions: CtxOptions,
    cntx: CanvasRenderingContext2D,
    afterDraw: () => void,
) => {
    const ctx = cntx;

    if(ctx) {
        ctx.lineWidth = socketOptions.lineWidth;
        ctx.strokeStyle = socketOptions.lineColor;

        ctx.beginPath();
        socketMoves.forEach(([x, y]) => {
            ctx.lineTo(x, y);
            ctx.stroke();
        })
        ctx.closePath();
        afterDraw();
    }
}

