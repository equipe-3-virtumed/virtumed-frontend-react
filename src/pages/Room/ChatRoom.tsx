import { useState } from "react";
import * as Styled from "./styles";
import { MdChat } from "react-icons/md";
import { useRoom } from "pages/Room/Contexts/roomContext";
import ChatModal from "components/Chat/ChatModal";
import socket from "services/socket";

interface Props {
  roomId: string | undefined;
}

const ChatRoom = ({ roomId }: Props) => {
  const {
    localParticipant,
    participant,
  } = useRoom();

  const [openModalChat, setOpenModalChat] = useState(false);

  const joinChatRoom = () => {
    if (localParticipant?.name !== undefined && roomId !== undefined) {
      socket.emit("joinRoom", roomId);
      console.log(socket);
      setOpenModalChat(true);
    }
  };

  return (
    <Styled.RoomContainer>
      <MdChat onClick={joinChatRoom} />
      "Camera Button" "Mic Button"
      {openModalChat && (
        <ChatModal
          openModal={openModalChat}
          setOpenModal={setOpenModalChat}
          usernameChat={localParticipant?.name}
          roomId={roomId}
        />
      )}
    </Styled.RoomContainer>
  );
};

export default ChatRoom;
