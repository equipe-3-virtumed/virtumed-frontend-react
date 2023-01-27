import { useDesign } from "../../contexts/ThemeContext";
import * as Styled from "./styles";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const ToggleThemeButton = () => {

  const { lightTheme, toggleTheme } = useDesign();

  return (
    <Styled.ToggleIcon onClick={toggleTheme}>
      {lightTheme ? <FaMoon /> : <FiSun />}
    </Styled.ToggleIcon>
  )
}

export default ToggleThemeButton;