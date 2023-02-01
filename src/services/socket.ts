import io from "socket.io-client";

const socket = io('http://localhost:3333/chat');

export default socket
