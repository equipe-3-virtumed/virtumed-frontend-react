import {
  createContext,
  useContext,
  ReactNode,
  useState
} from "react";
import socket from "services/socket";
import { useStreamSource } from "./StreamSource";
import Peer from "simple-peer";
import { useRoom } from "contexts/roomContext";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketProviderData {
  emitJoin: (roomId: string | undefined) => void;
  initiatePeer: () => void;
  getPeer: () => void;
}

interface IncomingStream {
  signal: MediaStream;
  id: string;
}

const SocketContext = createContext<SocketProviderData>({} as SocketProviderData);

export const SocketProvider = ({ children }: SocketProviderProps) => {

  const { roomId, roomAdmin } = useRoom();
  const emitJoin = (roomId: string | undefined) => {
    socket.emit("joinRoom", roomId);
  }

  const [localSocketId, setLocalSocketId] = useState<string>("");
  socket.on('joinedRoom', (clientId) => {
    setLocalSocketId(clientId);
  })

  const { stream, setParticipantStream } = useStreamSource();

  const initiatePeer = async () => {

  }

  const getPeer = async () => {
    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('videoRequest', { room: roomId, signal: data });
    });

    peer.on('stream', (currentStream: IncomingStream) => {
      if (currentStream.id !== localSocketId) {
        setParticipantStream(currentStream.signal)
      }
    })
  }

  return (
    <SocketContext.Provider value={{ emitJoin, initiatePeer, getPeer }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
