import { createContext, Dispatch, ReactNode, useContext, useState } from "react";

interface Prop {
  children: ReactNode;
}

interface ThemeContextType {
  lightTheme: boolean;
  setLightTheme: Dispatch<boolean>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider = ({ children }: Prop) => {
  const [lightTheme, setLightTheme] = useState<boolean>(true);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, setLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDesign = () => useContext(ThemeContext)
