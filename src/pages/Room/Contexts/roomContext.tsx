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
  roomId: string | undefined;
  roomAdmin: boolean;
  roomReady: boolean;
  localParticipant: AllFields | undefined;
  participant: AllFields | undefined;
  setRoomId: Dispatch<SetStateAction<string | undefined>>;
  setRoomAdmin: Dispatch<SetStateAction<boolean>>;
  setRoomReady: Dispatch<SetStateAction<boolean>>;
  setLocalParticipant: Dispatch<SetStateAction<AllFields | undefined>>;
  setParticipant: Dispatch<SetStateAction<AllFields | undefined>>;
}

const RoomContext = createContext<RoomProviderData>({} as RoomProviderData);

export const RoomProvider = ({ children }: RoomProviderProps) => {

  const [roomId, setRoomId] = useState<string | undefined>();
  const [roomAdmin, setRoomAdmin] = useState<boolean>(false);
  const [roomReady, setRoomReady] = useState<boolean>(false);
  const [localParticipant, setLocalParticipant] = useState<AllFields>();
  const [participant, setParticipant] = useState<AllFields>();

  return (
    <RoomContext.Provider value={{
        roomId, roomAdmin, roomReady, localParticipant, participant,
        setRoomId, setRoomAdmin, setRoomReady, setLocalParticipant, setParticipant,
      }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => useContext(RoomContext);