import io from "socket.io-client";

const socket = io(
  "virtumed-backend-production.up.railway.app/chat" ||
    "http://localhost:3333/chat"
);

export default socket;
