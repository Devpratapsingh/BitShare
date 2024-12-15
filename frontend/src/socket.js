import { io } from "socket.io-client";

export default function getSocket() {
    if (!socket) socket = io("https://bitshare-qo5v.onrender.com");
    return socket;
}
let socket;
