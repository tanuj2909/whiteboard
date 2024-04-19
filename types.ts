import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

export type NextApiResponseServerIo = NextApiResponse & {
    socket: Socket & {
        server: NetServer & {
            io: SocketIOServer
        }
    }
}
export interface CtxOptions {
    lineWidth: number;
    lineColor: string;
}

export type ServerToClientEvents = {
    socket_draw: (newMoves: [number, number][], options: CtxOptions) => void;
}

export type ClientToServerEvents = {
    draw: (moves: [number, number][], options: CtxOptions) => void;
}

