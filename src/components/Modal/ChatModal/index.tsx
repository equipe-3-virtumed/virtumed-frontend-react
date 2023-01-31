import { Button, Modal } from "antd";
import { Dispatch, useEffect, useState } from "react";
import * as Styled from "./styled";
import { useParams } from "react-router";
import ChatWidget from "components/Chat/ChatWidget";
import socket from "services/socket";

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<boolean>;
  routeData: {
    doctor: string;
    patient: string;
  };
}

const ChatModal = () => {
  const [name, setName] = useState("Pedro");
  const [showChat, setShowChat] = useState(false);

  const { roomId } = useParams();

  const joinRoom = () => {
    if (name !== "") {
      socket.emit("joinRoom", roomId);
      console.log(socket)
      setShowChat(true);
    }
  };

  useEffect(() => {
    joinRoom()
  }, [setName])

  const handleCancel = () => {
    // setOpenModal(false);
  };

  return (
    <Modal
      style={{
        width: '600px',
        height: 'auto'
      }}
      open={showChat}
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
