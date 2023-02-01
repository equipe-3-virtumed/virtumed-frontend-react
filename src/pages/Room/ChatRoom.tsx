import { useState } from "react";
import * as Styled from "./styles";
import { MdChat } from "react-icons/md";
import { useRoom } from "contexts/roomContext";
import ChatModal from "components/Modal/ChatModal";
import socket from "services/socket";

interface Props {
  roomId: string | undefined;
}

const ChatRoom = ({ roomId }: Props) => {
  const {
    localParticipant,
    localParticipantReady,
    setLocalParticipantReady,
    participant,
    participantReady,
    setParticipantReady,
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
