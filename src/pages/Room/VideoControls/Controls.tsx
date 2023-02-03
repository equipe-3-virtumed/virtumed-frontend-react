import { useState } from "react";
import { useRoom } from "../Contexts/roomContext";
import * as Styled from "./styles";
import {
  AudioOutlined,
  MessageOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import socket from "services/socket";
import ChatModal from "components/Chat/ChatModal";

interface Props {
  roomId: string | undefined;
}

const VideoControls = ({ roomId }: Props) => {
  const { localParticipant, participant } = useRoom();

  const [openModalChat, setOpenModalChat] = useState(false);

  const joinChatRoom = () => {
    if (localParticipant?.name !== undefined && roomId !== undefined) {
      socket.emit("joinRoom", roomId);
      console.log(socket);
      setOpenModalChat(true);
    }
  };

  return (
    <Styled.ControlContainer>
      <div>
        <AudioOutlined />
      </div>
      <div>
        <VideoCameraOutlined />
      </div>
      <div>
        <MessageOutlined onClick={joinChatRoom} />
      </div>
      {openModalChat && (
        <ChatModal
          openModal={openModalChat}
          setOpenModal={setOpenModalChat}
          usernameChat={localParticipant?.name}
          roomId={roomId}
        />
      )}
    </Styled.ControlContainer>
  );
};

export default VideoControls;
