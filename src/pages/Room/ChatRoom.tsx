import * as Styled from "./styles";
import { useRoom } from "contexts/roomContext";

const ChatRoom = () => {

  const { localParticipant, localParticipantReady, setLocalParticipantReady,
          participant, participantReady, setParticipantReady } = useRoom();

  return (
    <Styled.RoomContainer>
      "Camera Button"
      "Mic Button"
      "Chat Button"
    </Styled.RoomContainer>
  )
}

export default ChatRoom;