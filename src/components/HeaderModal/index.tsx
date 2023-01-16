import * as Styled from "./styles";
import Logo from "../../assets/logo.svg";

interface HomeModalProps {
  handleShowModal: () => void;
}

const HeaderModal = ({ handleShowModal }: HomeModalProps) => {
  return (
    <Styled.Container>
      <div>
        <img src={Logo} alt="Logo Virtumed" />
        <p onClick={handleShowModal}>X</p>
      </div>
    </Styled.Container>
  );
};

export default HeaderModal;
