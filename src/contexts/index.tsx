import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./authContext";
import ThemeDesign from "styles/themeColors";
import { RoomProvider } from "../pages/Room/Contexts/roomContext";
import { ThemeProvider } from "./themeContext";
import RoomProviders from "pages/Room/Contexts";

interface ProviderProp {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProp) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <ThemeDesign>
            <RoomProviders>
              {children}
            </RoomProviders>
          </ThemeDesign>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Providers;
