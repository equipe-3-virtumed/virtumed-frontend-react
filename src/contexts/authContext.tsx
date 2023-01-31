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
  login: (params: LoginParams) => void;
  role: string;
  logout: () => void;
  user: AllFields | undefined;
  loading: boolean;
  getLoader: (arg0: number) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');
  const [user, setUser] = useState<AllFields>();
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
    <AuthContext.Provider value={{ logged, role, login, logout, user, loading, getLoader }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
//export const useAuth = () => ({ logged: true, admin: true , login: (...args: any[]): any => {} });

