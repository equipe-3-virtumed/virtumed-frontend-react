import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";
import { AuthContextProvider } from "./auth";

interface ProviderProp {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProp) => {
  return (
    <ThemeProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
