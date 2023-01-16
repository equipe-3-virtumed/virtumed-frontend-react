import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { User } from "types";
import api from "../../services/api"

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  role: string;
  logout: () => void;
}

interface LoginParams {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');

  console.log("Logged", logged, "Role", role);

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    setRole(user.role);
    //mensagem de login bem sucedido
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
        setRole(res.data.role);
      })
      .catch((e) => {
        //open login modal
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();
  }, []);

  return (
    <AuthContext.Provider value={{ logged, login, role, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
//export const useAuth = () => ({ logged: true, admin: true , login: (...args: any[]): any => {} });

