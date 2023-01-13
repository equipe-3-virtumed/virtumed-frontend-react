import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router";
import { User } from "types/interfaces";
import { RoutesPath } from "../../types/paths";
import { message } from "antd";
import useCRUD from "services/api";

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderData {
  logged: boolean;
  loginUser: (params: LoginParams) => void;
  admin: boolean;
  logout: () => void;
}

interface LoginParams {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthContextProvider = ({ children }: AuthProps) => {
  const { handleGet: handleAuth } = useCRUD({
    model: "auth",
  });
  const navigate = useNavigate();

  const [logged, setLogged] = useState<boolean>(false);
  const [admin, setAdmin] = useState<boolean>(false);

  const loginUser = ({ token, user }: LoginParams) => {
    const userInfos = user;
    const userJson = JSON.stringify(userInfos);

    localStorage.setItem("Token", token);
    localStorage.setItem('User', userJson);
    setLogged(true);
    message.success({
      content: `Login efetuado com sucesso! Bem vindo(a) ${user.name}.`,
      duration: 6,
    });

    if (user.role === "admin") {
      setAdmin(true);
      navigate(RoutesPath.HOME);
    } else {
      navigate(RoutesPath.PATIENT_PAGE);
    }
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    setAdmin(false);
    navigate(RoutesPath.HOME);
  };

  const checkTokenExpiration = () => {
    const token = localStorage.getItem("Token");

    handleAuth({
      header: {
        Authorization: `Bearer ${token}`,
      },
    }).then(({ data, error }: any) => {
      if (error) {
        console.log("Error:");
        console.log(error);
        message.error({
          content: "Não foi possível se cadastrar! Faça o login novamente.",
          duration: 6,
        });
        return;
      }
      setLogged(true);
      console.log(data);
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (token) checkTokenExpiration();
  }, []);

  return (
    <AuthContext.Provider value={{ logged, loginUser, admin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
