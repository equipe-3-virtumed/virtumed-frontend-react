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
  patient: AllFields | undefined;
  doctor: AllFields | undefined;
  roomAdmin: boolean;
  localParticipant: AllFields | undefined;
  participant: AllFields | undefined;
  setPatient: Dispatch<SetStateAction<AllFields | undefined>>;
  setDoctor: Dispatch<SetStateAction<AllFields | undefined>>;
  setRoomAdmin: Dispatch<SetStateAction<boolean>>;
  setLocalParticipant: Dispatch<SetStateAction<AllFields | undefined>>;
  setParticipant: Dispatch<SetStateAction<AllFields | undefined>>;
}

const RoomContext = createContext<RoomProviderData>({} as RoomProviderData);

export const RoomProvider = ({ children }: RoomProviderProps) => {

  const [patient, setPatient] = useState<AllFields>();
  const [doctor, setDoctor] = useState<AllFields>();
  const [roomAdmin, setRoomAdmin] = useState<boolean>(false);
  const [localParticipant, setLocalParticipant] = useState<AllFields>();
  const [participant, setParticipant] = useState<AllFields>();

  return (
    <RoomContext.Provider value={{
        patient, doctor, roomAdmin, localParticipant, participant,
        setPatient, setDoctor, setRoomAdmin, setLocalParticipant, setParticipant
      }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => useContext(RoomContext);
//export const useAuth = () => ({ logged: true, admin: true , login: (...args: any[]): any => {} });

