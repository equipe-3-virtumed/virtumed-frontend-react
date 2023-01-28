import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  role: string;
  logout: () => void;
  user: Object;
  loading: boolean;
  getLoader: (arg0: number) => void;
}

interface LoginParams {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState<boolean>(false);
  console.log("🚀 ~ file: authContext.tsx:36 ~ AuthProvider ~ logged", logged)
  const [role, setRole] = useState<string>('');
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const getLoader = (time: number) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, time);
  }

  const login = ({ email, password }: LoginParams) => {
    api.post('/login', {email, password})
      .then((res) => {
        localStorage.setItem("token", res.data.token);
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
    <AuthContext.Provider value={{ logged, role, login, logout, user, loading, getLoader }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
//export const useAuth = () => ({ logged: true, admin: true , login: (...args: any[]): any => {} });

