import * as Styled from "./styles";
import LightLogo from "../../assets/light-logo.svg";
import DarkLogo from "../../assets/logo.svg";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDesign } from "contexts/themeContext";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useAuth } from "contexts/authContext";

interface HeaderModalProps {
  handleShowHeaderModal: () => void;
}

const HeaderModal = ({ handleShowHeaderModal }: HeaderModalProps) => {

  const { lightTheme, toggleTheme } = useDesign();

  const { logged, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.ContainerHeader>
        <img src={
          lightTheme ? DarkLogo : LightLogo
        } alt="Logo Virtumed"
        />
        <CloseOutlined
          style={{
            fontSize: "1.8rem",
            color: "#000",
          }}
          onClick={handleShowHeaderModal}
        />
      </Styled.ContainerHeader>
      <Styled.Menu>
        <div onClick={() => navigate("/patient")}>Área do Paciente</div>        
        <a href="https://www.virtumed.com.br/contact">Contato</a>
        {
          logged ?
            <div onClick={logout}>Sair</div>
          :
            <div onClick={() => navigate("/register")}>Registre-se</div>
        }
      </Styled.Menu>
      <Styled.ToggleIcon onClick={toggleTheme}>
        {lightTheme ? <FaMoon /> : <FiSun />}
      </Styled.ToggleIcon>
    </Styled.Container>
  );
};

export default HeaderModal;
