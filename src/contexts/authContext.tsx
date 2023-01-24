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

interface AuthProviderData {
  needed: boolean;
  setNeeded: Dispatch<SetStateAction<boolean>>;
  logged: boolean;
  login: (params: LoginParams) => void;
  role: string;
  logout: () => void;
  user: Object;
}

// interface User {

// }

interface LoginParams {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [needed, setNeeded] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');
  const [user, setUser] = useState<any>({});
  console.log("🚀 ~ file: index.tsx:41 ~ AuthProvider ~ needed", needed, "logged", logged, "role", role)

  const login = ({ email, password }: LoginParams) => {
    api.post('/login', {email, password})
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      setLogged(true);
      setNeeded(false);
      setRole(res.data.user.role);
      navigate("/");
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

    api
      .get(`/auth`, headers)
      .then((res) => {
        setUser(res.data);   
        setLogged(true);
        setNeeded(false);
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
    <AuthContext.Provider value={{ needed, setNeeded, logged, role, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
//export const useAuth = () => ({ logged: true, admin: true , login: (...args: any[]): any => {} });

