import * as Styled from "./styles";
import ReactPlayer from "react-player";
import { useStreamSource } from "./Contexts/StreamSource";
import VideoControls from "./VideoControls/Controls";

const VideoChatRoom = () => {

  const { stream, participantStream } = useStreamSource();
 
  return (
    <Styled.RoomContainer>
      <Styled.ParticipantVideo>
        <ReactPlayer 
          url={participantStream}
          width='100%'
          height='100%'
          playing={true}
          muted
        />
      <Styled.LocalVideo>
        <ReactPlayer 
          url={stream}
          width='100%'
          height='100%'
          playing={true}
          muted
        />
      </Styled.LocalVideo>
      </Styled.ParticipantVideo>
      <VideoControls />
    </Styled.RoomContainer>
  )
}

export default VideoChatRoom;
