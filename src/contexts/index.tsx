import { ReactNode } from "react"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./authContext";
import { ThemeProvider } from "./themeContext";
import ThemeDesign from "styles/globalTheme";

interface ProviderProp {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProp) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <ThemeDesign>
            {children}
          </ThemeDesign>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Providers;