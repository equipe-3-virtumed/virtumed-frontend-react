import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useRef,
  useMemo
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface StreamSourceProviderData {
  localStream: MediaStream | undefined;
  getStream: () => Promise<void>;
}

const StreamSourceContext = createContext<StreamSourceProviderData>({} as StreamSourceProviderData);

export const StreamSourceProvider = ({ children }: ProviderProps) => {

  const [localStream, setLocalStream] = useState<MediaStream>();

  const getStream = async () => {
    let devices = await navigator.mediaDevices.getUserMedia({'video': true, 'audio': true});
    setLocalStream(devices);
  }

  useEffect(() => {
    if (!localStream) {
      getStream()
    }
  }, [localStream])

  return (
    <StreamSourceContext.Provider value={{localStream, getStream}}>
      {children}
    </StreamSourceContext.Provider>
  );
};

export const useStreamSource = () => useContext(StreamSourceContext);
