import * as Styled from "./styles";
import LightLogo from "../../assets/light-logo.svg";
import DarkLogo from "../../assets/logo.svg";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts/authContext";
import ToggleThemeButton from "components/ToggleThemeButton";
import { useDesign } from "../../contexts/ThemeContext";

interface HeaderModalProps {
  handleShowHeaderModal: () => void;
}

const HeaderModal = ({ handleShowHeaderModal }: HeaderModalProps) => {

  const { logged, logout } = useAuth();
  const { lightTheme } = useDesign();

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
      <ToggleThemeButton />
    </Styled.Container>
  );
};

export default HeaderModal;
