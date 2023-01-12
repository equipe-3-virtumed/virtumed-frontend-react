import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export const useDesign = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error(
      "useTheme deve ser utilizado dentro da função ThemeProvider"
    );
  }

  return theme;
};
