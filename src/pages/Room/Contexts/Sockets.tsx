import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useRef,
} from "react";
import { useAuth } from "contexts/authContext";
import { useRoom } from "contexts/roomContext";
import { useStreamSource } from "./StreamSource";
import socket from "services/socket";
import Peer, { Instance } from "simple-peer";
import { log } from "console";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketProviderData {
  localSocketId: string;
  participantSocket: string;
  emitJoin: (roomId: string | undefined) => void;
  emitId: (roomId: string | undefined) => void;
  callUser: () => void;
  answerCall: () => void;
}

interface Call {
  isReceivedCall: boolean;
  from: string;
  name: string;
  signal: any;
}

const SocketContext = createContext<SocketProviderData>({} as SocketProviderData);

export const SocketProvider = ({ children }: SocketProviderProps) => {

  const emitJoin = (roomId: string | undefined) => {
    socket.emit("joinRoom", roomId);
  }

  const emitId = (roomId: string | undefined) => {
    socket.emit("emitId", roomId)
  }
  
  const { setRoomReady } = useRoom();
  const { stream, setParticipantStream } = useStreamSource();
  const { user } = useAuth();

  const [localSocketId, setLocalSocketId] = useState<string>("");
  const [participantSocket, setParticipantSocket] = useState<string>("");
  const [call, setCall] = useState<Call | undefined>();
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const connectionRef = useRef<Instance>();

  useEffect(() => {
    socket.on('joinedRoom', (clientId) => {
      if (localSocketId === "") {
        setLocalSocketId(clientId);
      }
    })

    socket.on('emitId', (socketId: string) => {
      if (socketId !== localSocketId) {
        setParticipantSocket(socketId)
      }
    })

    socket.on('calluser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivedCall: true, from, name: callerName, signal})
    })
  }, [])

  const answerCall = () => {
    setRoomReady(true);
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answercall', { signal: data, to: call?.from});
    })
    
    peer.on('stream', (currentStream) => {
      setParticipantStream(currentStream)
    })

    peer.signal(call?.signal);

    connectionRef.current = peer;

  }

  const callUser = () => {
    setRoomReady(true);

    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('calluser', { userToCall: participantSocket, signalData: data, from: localSocketId, name: user?.name });
    })
    
    peer.on('stream', (currentStream) => {
      setParticipantStream(currentStream)
    })
  }

  const leaveCall = () => {

  }

  return (
    <SocketContext.Provider value={{ localSocketId, participantSocket, emitJoin, emitId, callUser, answerCall }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
