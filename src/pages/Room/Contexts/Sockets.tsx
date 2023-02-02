import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from "react";
import socket from "services/socket";
import { useStreamSource } from "./StreamSource";
import Peer, { SignalData } from "simple-peer";
import { useRoom } from "contexts/roomContext";
import { useAuth } from "contexts/authContext";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketProviderData {
  emitJoin: (roomId: string | undefined) => void;
  emitId: () => void;
  initiatePeer: () => void;
  getPeer: () => void;
}

interface IncomingStream {
  signal: MediaStream;
  id: string;
}

const SocketContext = createContext<SocketProviderData>({} as SocketProviderData);

export const SocketProvider = ({ children }: SocketProviderProps) => {

  const { roomId, roomAdmin, setRoomReady } = useRoom();
  const { getLoader } = useAuth();

  const emitJoin = (roomId: string | undefined) => {
    socket.emit("joinRoom", roomId);
  }

  const [localSocketId, setLocalSocketId] = useState<string>("");
  const [participantSocket, setParticipantSocket] = useState<string>("");  

  socket.on('joinedRoom', (clientId) => {
    setLocalSocketId(clientId);
  })

  socket.on('readyToGo', () => {
    if (!roomAdmin) {
      setRoomReady(true);
      getLoader(5000)
    }
  })

  const emitId = () => {
    socket.emit('idExchange', roomId)
  }

  socket.on('idExchange', (data) => {
    if (data !== localSocketId) {
      setParticipantSocket(data)
      console.log("🚀 ~ file: Sockets.tsx:43 ~ SocketProvider ~ participantSocket", participantSocket)
    }
  })
  
  // socket.on('videoRequest', (data) => {
  //   // setDataSignal(data.signalData)
  //   setParticipantSocket(data.id)
  //   console.log("🚀 ~ file: Sockets.tsx:39 ~ SocketProvider ~ participantSocket", participantSocket)
  // })

  // const { stream, setParticipantStream } = useStreamSource();

  // const [dataSignal, setDataSignal] = useState<string | SignalData>("");

  const initiatePeer = async () => {
    // const peer = new Peer({ initiator: true, trickle: false, stream });

    // peer.on('signal', (data) => {
    //   console.log("🚀 ~ file: Sockets.tsx:55 ~ peer.on ~ data", data)
    //   socket.emit('videoRequest', { room: roomId, signal: data });
    // });

    // peer.on('stream', (currentStream: IncomingStream) => {
    //   if (currentStream.id !== localSocketId) {
    //     setParticipantStream(currentStream.signal)
    //   }
    // })

    // peer.signal(dataSignal)
  }

  const getPeer = async () => {
    // const peer = new Peer({ initiator: false, trickle: false, stream });

    // peer.on('signal', (data) => {
    //   console.log("🚀 ~ file: Sockets.tsx:72 ~ peer.on ~ data", data)
    //   socket.emit('videoRequest', { room: roomId, signal: data });
    // });

    // peer.on('stream', (currentStream: IncomingStream) => {
    //   if (currentStream.id !== localSocketId) {
    //     setParticipantStream(currentStream.signal)
    //   }
    // })

    // peer.signal(dataSignal)
  }

  return (
    <SocketContext.Provider value={{ emitJoin, emitId, initiatePeer, getPeer }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
