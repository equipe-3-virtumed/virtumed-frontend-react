import { useDesign } from "contexts/themeContext";
import * as Styled from "./styles";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const ToggleThemeButton = () => {

  const { lightTheme, toggleTheme } = useDesign();

  return (
    <Styled.ToggleIcon onClick={toggleTheme}>
      {lightTheme ? <FaMoon /> : <FiSun color="white" />}
    </Styled.ToggleIcon>
  )
}

export default ToggleThemeButton;