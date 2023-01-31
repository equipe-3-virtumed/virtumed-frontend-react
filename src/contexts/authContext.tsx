import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginParams {
  email: string;
  password: string;
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

interface AuthProviderData {
  logged: boolean;
  user: AllFields | undefined;
  role: string;
  loading: boolean;
  patient: AllFields | undefined;
  doctor: AllFields | undefined;
  roomAdmin: boolean;
  socketId: string;
  setPatient: Dispatch<SetStateAction<AllFields | undefined>>;
  setDoctor: Dispatch<SetStateAction<AllFields | undefined>>;
  setRoomAdmin: Dispatch<SetStateAction<boolean>>;
  setSocketId: Dispatch<SetStateAction<string>>;
  getLoader: (arg0: number) => void;
  login: (params: LoginParams) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState<boolean>(false);
  const [user, setUser] = useState<AllFields>();
  const [loading, setLoading] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');
  const [patient, setPatient] = useState<AllFields>();
  const [doctor, setDoctor] = useState<AllFields>();
  const [roomAdmin, setRoomAdmin] = useState<boolean>(false);
  const [socketId, setSocketId] = useState<string>("");
  
  const getLoader = (time: number) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, time);
  }

  const login = ({ email, password }: LoginParams) => {
    api.post('/login', {email, password})
      .then((res) => {
        console.log("🚀 ~ file: authContext.tsx:73 ~ .then ~ res", res.data.user)
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        setLogged(true);
        setRole(res.data.user.role);
      })
      .finally(() => {
        //mensagem de login bem sucedido
      })
      .catch((e) => {
        //do something
      })
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    setRole('');
    navigate("/");
  };

  const checkTokenExpiration = (token: string) => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get(`/auth`, headers)
      .then((res) => {
        setUser(res.data);   
        setLogged(true);
        setRole(res.data.role);
      })
      .catch((e) => {
        //open login modal
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration(token);
  }, []);

  return (
    <AuthContext.Provider value={{
        logged, user, role, loading, patient, doctor, roomAdmin, socketId,
        setPatient, setDoctor, setRoomAdmin, setSocketId, getLoader, login, logout
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
//export const useAuth = () => ({ logged: true, admin: true , login: (...args: any[]): any => {} });

