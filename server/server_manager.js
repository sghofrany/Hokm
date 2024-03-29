import express from 'express';
const app = express();
import {Server} from "socket.io";
import http from 'http';

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://10.204.87.185:5173"]
    }
});

export {
    server,
    io
}

