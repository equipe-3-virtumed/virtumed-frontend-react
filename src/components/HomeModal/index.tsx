import * as Styled from "./styles";

interface HomeModalProps {
  handleShowModal: () => void;
}

const HomeModal = ({ handleShowModal }: HomeModalProps) => {
  return (
    <Styled.Container>
      <p onClick={handleShowModal}>X</p>
    </Styled.Container>
  );
};

export default HomeModal;
