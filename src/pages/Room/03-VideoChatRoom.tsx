import * as Styled from "./styles";
import ReactPlayer from "react-player";
import { useStreamSource } from "./Contexts/StreamSource";
import VideoControls from "./Contexts/VideoControls/Controls";
import { useRoom } from "contexts/roomContext";

const VideoChatRoom = () => {

  const { roomAdmin } = useRoom();
  const { stream, getStream, participantStream } = useStreamSource();

 
  return (
    <Styled.RoomContainer>
      {/* <Styled.ParticipantVideo> */}
        <ReactPlayer 
          url={participantStream}
          width='200px'
          height='200px'
          playing={true}
          muted
        />
      {/* <Styled.LocalVideo> */}
        <ReactPlayer 
          url={stream}
          width='100px'
          height='100px'
          playing={true}
          muted
        />
      {/* </Styled.LocalVideo> */}
      {/* </Styled.ParticipantVideo> */}
      <VideoControls />
    </Styled.RoomContainer>
  )
}

export default VideoChatRoom;
