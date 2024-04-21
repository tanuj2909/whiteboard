"use client"

import { useDraw } from "@/hooks/use-draw";
import { socket } from "@/lib/socket";
import { CtxOptions } from "@/types";
import { useEffect, useRef, useState } from "react";

const CanvasPage = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D>();

    const [size, setSize] = useState({ width: 0, height: 0 });
    const [options, setOptions] = useState<CtxOptions>({ lineWidth: 5, lineColor: "#000" });

    const { handleEndDrawing, handleDraw, handleStartDrawing, drawing } = useDraw(options, ctxRef.current);

    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if(canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                setSize({ width: canvas.width, height: canvas.height });
            }
            
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
            <canvas 
                className="h-full w-full"
                ref={canvasRef}
                onMouseDown={(e) => {
                    handleStartDrawing(e.clientX, e.clientY);
                }}
                onMouseUp={(e) => {
                    handleEndDrawing(e.clientX, e.clientY);
                }}
                onMouseMove={(e) => {
                    handleDraw(e.clientX, e.clientY);
                }}
                onTouchStart={(e) => {
                    handleStartDrawing(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                }}
                onTouchEnd={(e) => {
                    handleEndDrawing(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                }}
                onTouchMove={(e) => {
                    handleDraw(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                }}
                width={size.width}
                height={size.height}
            />
        </div>
     );
}
 
export default CanvasPage;