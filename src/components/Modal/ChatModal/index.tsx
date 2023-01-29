import { Button, Modal } from "antd";
import { Dispatch, useState } from "react";
import * as Styled from "./styled";
import { useParams } from "react-router";
import ChatWidget from "components/Chat/ChatWidget";

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<boolean>;
  routeData: {
    doctor: string;
    patient: string;
  };
}

const ChatModal = () => {
  const [name, setName] = useState("");
  const { roomId } = useParams();

  const handleCancel = () => {
    // setOpenModal(false);
  };

  return (
    <Modal
      style={{
        width: '600px',
        height: 'auto'
      }}
      open={true}
      onCancel={handleCancel}
      footer={[
        <div
          key="container"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: '100%'
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
        <ChatWidget username={name} room={roomId} />
      </Styled.ChatContainer>
    </Modal>
  );
};

export default ChatModal;
