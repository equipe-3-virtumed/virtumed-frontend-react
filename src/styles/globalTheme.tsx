import { useDesign } from "contexts/themeContext";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface Prop {
  children: ReactNode;
}

const lightTheme = {
  body: "linear-gradient(90deg, #66d2e2, #e54197)",
  text: "#000",
  headerBackground: "linear-gradient(45deg, #5223AD60, #66d2e280)",
};

const darkTheme = {
  body: "linear-gradient(90deg, #1b1b1b, #5223AD)",
  text: "#fff",
  headerBackground: "linear-gradient(45deg, #e5419760, #1b1b1b80)",
};

const ThemeDesign = ({ children }: Prop) => {
  const { themeDesign } = useDesign();

  return (
    <ThemeProvider theme={themeDesign === "Light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeDesign;
