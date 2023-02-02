import {
  createContext,
  useContext,
  ReactNode,
  useState
} from "react";
import socket from "services/socket";
import { useStreamSource } from "./StreamSource";
import Peer from "simple-peer";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketProviderData {
  emitJoin: (roomId: string | undefined) => void;
  getPeer: () => void;
}

interface IncomingStream {
  signal: MediaStream;
  id: string;
}

const SocketContext = createContext<SocketProviderData>({} as SocketProviderData);

export const SocketProvider = ({ children }: SocketProviderProps) => {

  const [roomId, setRoomId] = useState<string | undefined>("");

  const emitJoin = (roomId: string | undefined) => {
    socket.emit("joinRoom", roomId);
    setRoomId(roomId);
  }

  const [localSocketId, setLocalSocketId] = useState<string>("");

  socket.on('joinedRoom', (clientId) => {
    setLocalSocketId(clientId)
  })

  const { stream, participantStream, setLocalParticipantStream } = useStreamSource();

  const getPeer = () => {
    const peer = new Peer({ initiator: true, trickle: true, stream });

    peer.on('signal', (data) => {
      socket.emit('videoRequest', { room: roomId, signal: data });
    });

    peer.on('stream', (incomingStream: IncomingStream) => {
      console.log("🚀 ~ file: Sockets.tsx:52 ~ peer.on ~ incomingStream", incomingStream)
      if (incomingStream.id !== localSocketId) {
        setLocalParticipantStream(incomingStream.signal)
      }
    })

    peer.signal('videoStream')
  }

  return (
    <SocketContext.Provider value={{ emitJoin, getPeer }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
