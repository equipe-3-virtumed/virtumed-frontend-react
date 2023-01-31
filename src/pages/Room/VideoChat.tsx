import * as Styled from "./styles";
import { useAuth } from "contexts/authContext";

const VideoChat = () => {
  const { user } = useAuth();
  
  return (
    <Styled.RoomContainer>
      <h2>Olá {user?.name}</h2>
    </Styled.RoomContainer>

  )
}

export default VideoChat;