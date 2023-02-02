import {
  createContext,
  useContext,
  ReactNode,
  useState,
} from "react";
import socket from "services/socket";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketProviderData {
  emitJoin: (roomId: string | undefined) => void;
}

const SocketContext = createContext<SocketProviderData>({} as SocketProviderData);

export const SocketProvider = ({ children }: SocketProviderProps) => {

  const emitJoin = (roomId: string | undefined) => {
    socket.emit("joinRoom", roomId);
  }

  const [localSocketId, setLocalSocketId] = useState<string>("");
  const [participantSocket, setParticipantSocket] = useState<string>("");  
  
  socket.on('joinedRoom', (clientId) => {
    setLocalSocketId(clientId);
    console.log("🚀 ~ file: Sockets.tsx:28 ~ SocketProvider ~ localSocketId", localSocketId)
  })

  return (
    <SocketContext.Provider value={{ emitJoin }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
