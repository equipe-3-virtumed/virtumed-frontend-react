import * as Styled from "./styles";
import Logo from "../../assets/logo.svg";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface HomeModalProps {
  handleShowModal: () => void;
}

const HeaderModal = ({ handleShowModal }: HomeModalProps) => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <div>
        <img src={Logo} alt="Logo Virtumed" />
        <CloseOutlined
          style={{
            fontSize: "1.8rem",
            color: "#000",
          }}
          onClick={handleShowModal}
        />
      </div>
      <div>
        <div onClick={() => navigate("/login")}>Login</div>
        <div onClick={() => navigate("/register")}>Registre-se</div>
        <a href="https://www.virtumed.com.br/contact">Contato</a>
      </div>
    </Styled.Container>
  );
};

export default HeaderModal;
