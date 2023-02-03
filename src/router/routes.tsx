import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import PatientPage from "pages/UserPages/Patient";
import ClinicPage from "pages/UserPages/Clinic";
import DoctorPage from "pages/UserPages/Doctor";
import Room from "pages/Room/01-Room";
import { useRoutes } from "react-router";
import { RoutesPath } from "./paths";
import { useAuth } from "contexts/authContext";

const Routes = () => {
  const { logged, role } = useAuth();

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
      element: logged && (role === 'patient') ? <PatientPage /> : <Login />
    },
     {
      path: RoutesPath.DOCTOR_PAGE,
      element: logged && (role === 'doctor') ? <DoctorPage /> : <Login />
    },
    {
      path: RoutesPath.CLINIC_PAGE,
      element: logged && (role === 'organization') ? <ClinicPage /> : <Login />
    },
    {
      path: RoutesPath.ROOM_PAGE,
      element: "Página da consulta"
    },
    {
      path: RoutesPath.CONNECT_ROOM_PAGE,
      element: logged ? <Room /> : <Login />
    },
  ]);
};

export { Routes };
