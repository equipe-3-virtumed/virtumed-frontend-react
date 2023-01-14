/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useCRUD from "services/api";
import { RoutesPath } from "./paths";
import { message } from "antd";
import { User } from "./interfaces";

interface AuthRoutesTypes {
  default: string[];
  admin: string[];
  pacienty: string[];
  doctor: string[];
  organization: string[];
}

const AuthRoutes = ({ children }: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { handleGet: handleUserAuth } = useCRUD({
    model: "auth",
  });

  const [userDataInfos, setUserDataInfos] = useState<User>({
    id: "",
    email: "",
    image: "",
    name: "",
    role: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const authRoutes: AuthRoutesTypes = {
    default: [RoutesPath.HOME],
    admin: [],
    doctor: [],
    pacienty: [],
    organization: [],
  };

  const getRoutesByRole = (role: string) => {
    switch (role) {
      case "admin":
        return authRoutes.admin;
      case "pacienty":
        return authRoutes.pacienty;
      case "doctor":
        return authRoutes.doctor;
      case "organization":
        return authRoutes.organization;
      default:
        return [];
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");
    const userJson = localStorage.getItem("User");

    if (userJson) {
      const userData = JSON.parse(userJson);
      setUserDataInfos({
        id: userData.id,
        email: userData.email,
        image: userData.image,
        name: userData.name,
        role: userData.role,
      });
    }

    handleUserAuth({
      header: {
        Authorization: `Bearer ${token}`,
      },
    }).then(({ data, error }: any) => {
      if (error) {
        console.log(error);
        setIsLoading(false);
      }

      if (!data && !authRoutes.default.includes(location.pathname)) {
        setIsAuthenticated(false);
        setIsLoading(false);
        message.error({
          content: "Sessão expirada, por favor faça login novamente",
          duration: 10,
        });
        return;
      }

      if (!data) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    });
  }, [location.pathname]);

  if (isLoading) {
    if (!userDataInfos.id && authRoutes.default.includes(location.pathname)) {
      return children;
    }

    if (!isAuthenticated && location.pathname === RoutesPath.LOGIN) {
      return children;
    }

    if (!isAuthenticated && location.pathname !== RoutesPath.LOGIN) {
      navigate(RoutesPath.LOGIN);
      return null;
    }

    if (
      isAuthenticated &&
      !getRoutesByRole(userDataInfos.role || "").find(
        (url) => url === location.pathname
      )
    ) {
      navigate(
        getRoutesByRole(userDataInfos.role || "")?.[0] || RoutesPath.LOGIN
      );
      return null;
    }

    if (isAuthenticated && location.pathname === RoutesPath.LOGIN) {
      navigate(RoutesPath.HOME);
      return null;
    }

    return children;
  }
};

export default AuthRoutes;
