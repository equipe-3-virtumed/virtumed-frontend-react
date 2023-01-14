import Providers from "./contexts";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeDesign from "./styles/globalTheme";
import { Routes } from "types/routes";
import "./App.css";
import AuthRoutes from "types/authRoutes";

function App() {
  return (
    <Providers>
      <ThemeDesign>
        <BrowserRouter>
          <AuthRoutes>
            <Routes />
          </AuthRoutes>
        </BrowserRouter>
      </ThemeDesign>
    </Providers>
  );
}

export default App;
