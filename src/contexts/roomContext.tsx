import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface RoomProviderProps {
  children: ReactNode;
}

interface AllFields {
  id: string;
  email: string;
  name: string;
  image: string;
  phone: string;
  cnpj: string;
  crm: string;
  role: string;
}

interface RoomProviderData {
  roomAdmin: boolean;
  localParticipant: AllFields | undefined;
  participant: AllFields | undefined;
  localParticipantReady: boolean;
  participantReady: boolean;
  setRoomAdmin: Dispatch<SetStateAction<boolean>>;
  setLocalParticipant: Dispatch<SetStateAction<AllFields | undefined>>;
  setLocalParticipantReady: Dispatch<SetStateAction<boolean>>;
  setParticipant: Dispatch<SetStateAction<AllFields | undefined>>;
  setParticipantReady: Dispatch<SetStateAction<boolean>>;
}

const RoomContext = createContext<RoomProviderData>({} as RoomProviderData);

export const RoomProvider = ({ children }: RoomProviderProps) => {

  const [roomAdmin, setRoomAdmin] = useState<boolean>(false);
  const [localParticipant, setLocalParticipant] = useState<AllFields>();
  const [localParticipantReady, setLocalParticipantReady] = useState<boolean>(false);
  const [participant, setParticipant] = useState<AllFields>();
  const [participantReady, setParticipantReady] = useState<boolean>(false);

  return (
    <RoomContext.Provider value={{
        roomAdmin, localParticipant, localParticipantReady, participant, participantReady,
        setRoomAdmin, setLocalParticipant, setLocalParticipantReady, setParticipant, setParticipantReady
      }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => useContext(RoomContext);