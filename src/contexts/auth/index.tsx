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
import api from "../../services/api"

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
}

interface LoginParams {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [needed, setNeeded] = useState<boolean>(false);
  // console.log("🚀 ~ file: index.tsx:38 ~ AuthProvider ~ needed", needed)
  const [logged, setLogged] = useState<boolean>(false);
  // console.log("🚀 ~ file: index.tsx:40 ~ AuthProvider ~ logged", logged)
  const [role, setRole] = useState<string>('');
  console.log("🚀 ~ file: index.tsx:41 ~ AuthProvider ~ role", role)

  const login = ({ email, password }: LoginParams) => {
    api.post('/login', {email, password})
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
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

  const checkTokenExpiration = () => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`/auth`, headers)
      .then((res) => {
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

    if (token) checkTokenExpiration();
  });

  return (
    <AuthContext.Provider value={{ needed, setNeeded, logged, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
//export const useAuth = () => ({ logged: true, admin: true , login: (...args: any[]): any => {} });

