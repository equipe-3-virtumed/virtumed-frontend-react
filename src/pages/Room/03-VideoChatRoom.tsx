import * as Styled from "./styles";
import ReactPlayer from "react-player";
import { useStreamSource } from "./Contexts/StreamSource";
import { Button } from "antd";

const VideoChatRoom = () => {

  const { localStream, getStream } = useStreamSource();

  return (
    <Styled.RoomContainer>

      <Styled.ParticipantVideo>
        <ReactPlayer 
          url={localStream}
          width='100%'
          height='100%'
          playing={true}
        />
      <Styled.LocalVideo>
        <ReactPlayer 
          url={localStream}
          width='100%'
          height='100%'
          playing={true}
        />
      </Styled.LocalVideo>
      </Styled.ParticipantVideo>
    </Styled.RoomContainer>
  )
}

export default VideoChatRoom;
