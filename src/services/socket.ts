import io from "socket.io-client";

const socket = io(
  process.env.REACT_APP_SOCKET_CONNECTION || "http://localhost:3333/chat"
);

export default socket;
