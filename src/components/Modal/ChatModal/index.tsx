import { Button, Modal } from "antd";
import { Dispatch } from "react";
import * as Styled from "./styled";

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<boolean>;
  routeData: {
    doctor: string;
    patient: string;
  };
}

const ChatModal = ({ openModal, setOpenModal, routeData }: ModalProps) => {
  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onCancel={handleCancel}
      footer={[
        <div
          key="container"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button
            style={{ margin: ".6rem 0" }}
            key="back"
            onClick={handleCancel}
          >
            Fechar
          </Button>
        </div>,
      ]}
    >
      <Styled.ChatContainer>
        <div>
          {" "}
          Doutor(a) {routeData.doctor}: Boa noite <br />
          Paciente {routeData.patient}: Boa noite
        </div>
      </Styled.ChatContainer>
    </Modal>
  );
};

export default ChatModal;
