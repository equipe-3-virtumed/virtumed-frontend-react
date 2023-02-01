import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
} from "react";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketProviderData {
  localStream: any;
  participantStream: any;
}

const SocketContext = createContext<SocketProviderData>({} as SocketProviderData);

export const SocketProvider = ({ children }: SocketProviderProps) => {

  const [localStream, setLocalStream] = useState<any>();
  // const localStream = useRef(null);

  const participantStream = "";

  const getStream = async () => {
    await navigator.mediaDevices.getUserMedia({'video': true})
      .then(stream => {
        setLocalStream(stream)
        // let localVideo: any = localStream.current
        // localVideo.srcObject = stream
        // localVideo.play()
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

