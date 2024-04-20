"use client"

import { useDraw } from "@/hooks/use-draw";
import { socket } from "@/lib/socket";
import { CtxOptions } from "@/types";
import { useEffect, useRef, useState } from "react";

const BoardPage = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D>();

    const [size, setSize] = useState({ width: 0, height: 0 });
    const [options, setOptions] = useState<CtxOptions>({ lineWidth: 5, lineColor: "#000" });

    const { handleEndDrawing, handleDraw, handleStartDrawing, drawing } = useDraw(options, ctxRef.current);

    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas) {
            const ctx = canvas.getContext("2d");
            if(ctx) ctxRef.current = ctx; 
        }
    }, [options.lineColor, options.lineWidth]);

    const drawFromSocket = (
        socketMoves: [number, number][],
        socketOptions: CtxOptions
    ) => {
        const ctx = ctxRef.current;

        if(ctx) {
            ctx.lineWidth = socketOptions.lineWidth;
            ctx.strokeStyle = socketOptions.lineColor;

            ctx.beginPath();
            socketMoves.forEach(([x, y]) => {
                ctx.lineTo(x, y);
                ctx.stroke();
            })
            ctx.closePath();
        }
    }

    useEffect(() => {
        let movesToDrawLater: [number, number][] = [];
        let optionsToUseLater: CtxOptions = {
            lineColor: "",
            lineWidth: 0
        };

        socket.on("socket_draw",(moves, options) => {
            if(!ctxRef.current && !drawing) {
                drawFromSocket(moves, options)
            } else {
                movesToDrawLater = moves;
                optionsToUseLater = options;
            }
        });

        return () => {
            socket.off("socket_draw");

            if(movesToDrawLater.length) {
                drawFromSocket(movesToDrawLater, optionsToUseLater);
            }
        }
    }, [drawing]);

    const getCanvasOffset = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            return { x: rect.left, y: rect.top };
        }
        return { x: 0, y: 0 };
    };

    const adjustCoordinates = (clientX: number, clientY: number) => {
        const offset = getCanvasOffset();
        return { x: clientX - offset.x, y: clientY - offset.y };
    };
    
    return ( 
        <div className="h-full w-full">
            <button onClick={() => setOptions({ lineColor: "blue", lineWidth: 5})}>Helo</button>
            <canvas 
                className="h-full w-full"
                ref={canvasRef}
                onMouseDown={(e) => {
                    const { x, y } = adjustCoordinates(e.clientX, e.clientY);
                    handleStartDrawing(x, y);
                }}
                onMouseUp={(e) => {
                    const { x, y } = adjustCoordinates(e.clientX, e.clientY);
                    handleEndDrawing(x, y);
                }}
                onMouseMove={(e) => {
                    const { x, y } = adjustCoordinates(e.clientX, e.clientY);
                    handleDraw(x, y);
                }}
                onTouchStart={(e) => {
                    const { x, y } = adjustCoordinates(
                        e.changedTouches[0].clientX,
                        e.changedTouches[0].clientY
                    );
                    handleStartDrawing(x, y);
                }}
                onTouchEnd={(e) => {
                    const { x, y } = adjustCoordinates(
                        e.changedTouches[0].clientX,
                        e.changedTouches[0].clientY
                    );
                    handleEndDrawing(x, y);
                }}
                onTouchMove={(e) => {
                    const { x, y } = adjustCoordinates(
                        e.changedTouches[0].clientX,
                        e.changedTouches[0].clientY
                    );
                    handleDraw(x, y);
                }}
                width={size.width}
                height={size.height}
            />
        </div>
     );
}
 
export default BoardPage;