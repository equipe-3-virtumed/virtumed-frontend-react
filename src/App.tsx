import Providers from "./contexts";
import ThemeDesign from "./styles/globalTheme";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "types/routes";
import "./App.css";
import { AuthProvider } from "contexts/auth";

function App() {
  return (
    <Providers>
      <ThemeDesign>
        <BrowserRouter>
          <AuthProvider>
            <Routes />
          </AuthProvider>          
        </BrowserRouter>
      </ThemeDesign>
    </Providers>
  );
}

export default App;
