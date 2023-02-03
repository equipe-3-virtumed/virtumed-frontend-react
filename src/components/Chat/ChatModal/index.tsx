import { Button, Modal } from "antd";
import { Dispatch } from "react";
import * as Styled from "./styled";
import ChatWidget from "components/Chat/ChatWidget";

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<boolean>;
  usernameChat: string | undefined;
  roomId: string | undefined;
}

const ChatModal = ({ openModal, setOpenModal, roomId, usernameChat }: ModalProps) => {
  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      style={{
        width: '600px',
        height: 'auto'
      }}
      open={openModal}
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
        <ChatWidget username={usernameChat} room={roomId} />
      </Styled.ChatContainer>
    </Modal>
  );
};

export default ChatModal;
