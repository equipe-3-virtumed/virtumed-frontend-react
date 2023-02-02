import * as Styled from "./styles";
import ReactPlayer from "react-player";
import { useStreamSource } from "./Contexts/StreamSource";
import VideoControls from "./Contexts/VideoControls/Controls";
import { useEffect } from "react";
import { useSocket } from "./Contexts/Sockets";

const VideoChatRoom = () => {

  const { stream, getStream, participantStream } = useStreamSource();
  const { getPeer } = useSocket();

  useEffect(() => {
    getStream();
    getPeer();
  }, [])
  
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
