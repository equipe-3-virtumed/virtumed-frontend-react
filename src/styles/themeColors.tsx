import { useDesign } from "../contexts/ThemeContext";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface Prop {
  children: ReactNode;
}

const lightDesign = {
  body: "linear-gradient(90deg, #66d2e2, #e54197)",
  text: "#000",
  headerBackground: "linear-gradient(45deg, #5223AD60, #66d2e280)",
};

const darkDesign = {
  body: "linear-gradient(90deg, #1b1b1b, #5223AD)",
  text: "#fff",
  headerBackground: "linear-gradient(45deg, #e5419760, #1b1b1b80)",
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
