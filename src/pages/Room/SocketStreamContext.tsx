import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketProviderData {
  localStream: MediaStream | undefined;
  participantStream: MediaStream | undefined;
}

const SocketContext = createContext<SocketProviderData>({} as SocketProviderData);

export const SocketProvider = ({ children }: SocketProviderProps) => {

  const [localStream, setLocalStream] = useState<MediaStream>();
  const [participantStream, setParticipantStream] = useState<MediaStream>();

  const getStream = async () => {
    await navigator.mediaDevices.getUserMedia({'video': true, 'audio': true})
      .then(stream => {
        setLocalStream(stream)
      })
  }

  useEffect(() => {
    getStream()
  }, [localStream])

  return (
    <SocketContext.Provider value={{localStream, participantStream}}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
//export const useAuth = () => ({ logged: true, admin: true , login: (...args: any[]): any => {} });

