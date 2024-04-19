import { createServer } from "http";


import express from "express";
import next, { NextApiHandler } from "next";
import { Server } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from "@/types";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
    const app = express();
    const server = createServer(app);
  
    const io = new Server<ClientToServerEvents, ServerToClientEvents>(server);
  
    app.get("/health", async (_, res) => {
      res.send("Healthy");
    });

    io.on("connect", (socket) => {
        console.log("connect");
        socket.on("draw", (moves, options) => {
            console.log("drawing");
            socket.broadcast.emit("socket_draw", moves, options);
        });
    });

    io.on("disconnect", () => {
        console.log("disconnected");
    });

    

    app.all("*", (req: any, res: any) => nextHandler(req, res));

    server.listen(port, () => {
        console.log(`Ready on http://localhost:${port}`);
    });
})