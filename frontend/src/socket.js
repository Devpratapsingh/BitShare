import { io } from "socket.io-client";

export default function getSocket() {
    if (!socket) socket = io("https://bitshare-mzp2.onrender.com");
    return socket;
}
let socket;
