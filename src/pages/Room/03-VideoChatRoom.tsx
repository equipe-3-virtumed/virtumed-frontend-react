import * as Styled from "./styles";

import ReactPlayer from "react-player";
import { useSocket } from "./SocketStreamContext";

const VideoChatRoom = () => {

  // const { roomId } = useParams();

  // const { localParticipant, localParticipantReady, setLocalParticipantReady,
  //         participant, participantReady, setParticipantReady } = useRoom();
  
  const { localStream, participantStream } = useSocket();

  return (
    <Styled.RoomContainer>
      <Styled.LocalVideo>
        <ReactPlayer 
          className='react-player'
          url={localStream}
          width='100%'
          height='100%'
          playsinline
        />
      </Styled.LocalVideo>
      <Styled.LocalVideo>
        <ReactPlayer />
      </Styled.LocalVideo>
    </Styled.RoomContainer>
  )
}

export default VideoChatRoom;
