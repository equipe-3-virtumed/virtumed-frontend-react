import io from "socket.io-client";

const socket = io('http://localhost:3333/chat' || 'virtumed-backend-production.up.railway.app/chat');

export default socket;