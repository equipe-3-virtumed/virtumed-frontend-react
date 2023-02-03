import io from "socket.io-client";

const socket = io(
  "https://virtumed-backend-production.up.railway.app/" ||
    "http://localhost:3333/"
);

export default socket;
