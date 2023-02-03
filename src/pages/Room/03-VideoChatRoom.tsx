import * as Styled from "./styles";
import ReactPlayer from "react-player";
import { useStreamSource } from "./Contexts/StreamSource";
import VideoControls from "./VideoControls/Controls";
import { useRoom } from "./Contexts/roomContext";

const VideoChatRoom = () => {
  const { roomId } = useRoom()  
  const { stream, participantStream } = useStreamSource();
  
  console.log(roomId)
  return (
    <Styled.RoomContainer>
      <Styled.ParticipantVideo>
        <ReactPlayer 
          url={participantStream}
          width='100%'
          height='100%'
          playing={true}
        />
      </Styled.ParticipantVideo>
        <Styled.LocalVideo>
          <ReactPlayer 
            url={stream}
            width='100%'
            height='100%'
            playing={true}
          />
        </Styled.LocalVideo>
      <VideoControls roomId={roomId} />
    </Styled.RoomContainer>
  )
}

export default VideoChatRoom;
