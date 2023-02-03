import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
} from 'react';
import { useRoom } from 'pages/Room/Contexts/roomContext';
import { useStreamSource } from './StreamSource';
import socket from 'services/socket';
import Peer, { Instance } from 'simple-peer';

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketProviderData {
  localSocketId: string;
  participantSocket: string;
  callAccepted: boolean;
  emitJoin: (roomId: string | undefined) => void;
  emitId: (roomId: string | undefined) => void;
  callUser: () => void;
  answerCall: () => void;
}

interface Call {
  signal: any;
  from: string;
}

const SocketContext = createContext<SocketProviderData>({} as SocketProviderData);

export const SocketProvider = ({ children }: SocketProviderProps) => {

  const { roomId, setRoomReady } = useRoom();
  const { stream, setParticipantStream } = useStreamSource();

  const [localSocketId, setLocalSocketId] = useState<string>('');
  const [participantSocket, setParticipantSocket] = useState<string>('');
  const [call, setCall] = useState<Call | undefined>();
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  // const [callEnded, setCallEnded] = useState<boolean>(false);

  const emitJoin = (roomId: string | undefined) => {
    socket.emit('joinRoom', roomId);
    socket.on('joinedRoom', (clientId) => {
      setLocalSocketId(clientId)
    })
  }

  const emitId = (roomId: string | undefined) => {
    socket.emit('emitId', roomId)
    socket.on('emittedId', (socketId: string) => {
      localSocketId !== socketId && socketId && setParticipantSocket(socketId)
    })
    socket.on('usercalling', ({ signal, from }) => {
      setCall({ signal, from })
    })
    socket.on('roomReady', () => {
      setTimeout(() => {
        setRoomReady(true);
      }, 5000)
    })
  }

  const connectionRef = useRef<Instance>();

  const answerCall = () => {
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
    setCallAccepted(true);
    setRoomReady(true);

    const peer = new Peer({ initiator: true, trickle: false, stream });

    socket.emit('roomReady', roomId);

    peer.on('signal', (data) => {
      const callData = {
        userToCall: participantSocket,
        signalData: data,
      }
      socket.emit('calluser', callData);
    })
    
    peer.on('stream', (currentStream) => {
      setParticipantStream(currentStream)
    })

    socket.on('callaccepted', (signal) => {
      peer.signal(signal)
    })

    connectionRef.current = peer;
  }

  const leaveCall = () => {

  }

  return (
    <SocketContext.Provider value={{ localSocketId, participantSocket, callAccepted, emitJoin, emitId, callUser, answerCall }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
