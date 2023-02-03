import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface StreamSourceProviderData {
  stream: MediaStream | undefined;
  getStream: () => Promise<void>;
  participantStream: MediaStream | undefined;
  setParticipantStream: Dispatch<SetStateAction<MediaStream | undefined>>;
}

const StreamSourceContext = createContext<StreamSourceProviderData>({} as StreamSourceProviderData);

export const StreamSourceProvider = ({ children }: ProviderProps) => {

  const [stream, setLocalStream] = useState<MediaStream>();
  const [participantStream, setParticipantStream] = useState<MediaStream>();

  const getStream = async () => {
    let devices = await navigator.mediaDevices.getUserMedia({'video': true, 'audio': true});
    setLocalStream(devices);
  }

  return (
    <StreamSourceContext.Provider value={{stream, getStream, participantStream, setParticipantStream }}>
      {children}
    </StreamSourceContext.Provider>
  );
};

export const useStreamSource = () => useContext(StreamSourceContext);
