import { useDesign } from "../contexts/themeContext";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface Prop {
  children: ReactNode;
}

const lightDesign = {
  body: "linear-gradient(90deg, #66d2e2, #e54197)",
  text: "#000",
  background: "#F0F6FC",
  headerBackground: "#EEE",
};

const darkDesign = {
  body: "linear-gradient(90deg, #1b1b1b, #5223AD)",
  text: "#EEE",
  background: "#0D1117",
  headerBackground: "#161b22",
};

const ThemeDesign = ({ children }: Prop) => {
  const { lightTheme } = useDesign();

  return (
    <ThemeProvider theme={lightTheme ? lightDesign : darkDesign}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeDesign;
