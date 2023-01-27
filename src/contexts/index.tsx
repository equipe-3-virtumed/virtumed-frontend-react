import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./authContext";
import ThemeDesign from "styles/themeColors";
import { ThemeProvider } from "./ThemeContext";

interface ProviderProp {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProp) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <ThemeDesign>{children}</ThemeDesign>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Providers;
