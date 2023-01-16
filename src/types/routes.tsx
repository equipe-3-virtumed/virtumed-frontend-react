import Home from "pages/Home";
import Login from "pages/Login";
import PatientPage from "pages/Patient";
import Register from "pages/Register";
import { Room } from "pages/Room";
import { useRoutes } from "react-router";
import { RoutesPath } from "./paths";

const Routes = () => {
  return useRoutes([
    {
      path: RoutesPath.LOGIN,
      element: <Login />,
    },
    {
      path: RoutesPath.HOME,
      element: <Home />,
    },
    {
      path: RoutesPath.REGISTER,
      element: <Register />,
    },
    {
      path: RoutesPath.PATIENT_PAGE,
      element: <PatientPage />
    },
    {
      path: RoutesPath.ROOM_PAGE,
      element: <Room />
    }
  ]);
};

export { Routes };