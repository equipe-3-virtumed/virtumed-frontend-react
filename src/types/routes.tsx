import Home from "pages/Home";
import Login from "pages/Login";
import PatientPage from "pages/Patient";
import Register from "pages/Register";
import DoctorPage from "pages/Doctor";
import { Room } from "pages/Room/index";
import { useRoutes } from "react-router";
import { RoutesPath } from "./paths";
import ClinicPage from "pages/Clinic";
import { useAuth } from "contexts/authContext";

const Routes = () => {
  const { logged } = useAuth();

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
      element: logged ? <PatientPage /> : <Login />
    },
     {
      path: RoutesPath.DOCTOR_PAGE,
      element: logged ? <DoctorPage /> : <Login />
    },
    {
      path: RoutesPath.CLINIC_PAGE,
      element: logged ? <ClinicPage /> : <Login />
    },
    {
      path: RoutesPath.ROOM_PAGE,
      element: "Página da consulta"
    },
    {
      path: RoutesPath.CONNECT_ROOM_PAGE,
      element: logged ? <Room /> : <Login />
    }
  ]);
};

export { Routes };
