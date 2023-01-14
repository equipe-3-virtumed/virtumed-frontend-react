import * as Styled from "./styles";
import Logo from "../../assets/logo.svg";
import { CloseOutlined } from "@ant-design/icons";

interface HomeModalProps {
  handleShowModal: () => void;
}

const HeaderModal = ({ handleShowModal }: HomeModalProps) => {
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
    </Styled.Container>
  );
};

export default HeaderModal;
