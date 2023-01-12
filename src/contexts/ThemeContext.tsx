import { createContext, Dispatch, ReactNode, useState } from "react";

interface Prop {
  children: ReactNode;
}

type ThemeType = "Light" | "Dark";

interface ThemeContextType {
  themeDesign: ThemeType;
  setThemeDesign: Dispatch<ThemeType>;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider = ({ children }: Prop) => {
  const [themeDesign, setThemeDesign] = useState<ThemeType>("Light");

  return (
    <ThemeContext.Provider value={{ themeDesign, setThemeDesign }}>
      {children}
    </ThemeContext.Provider>
  );
};
