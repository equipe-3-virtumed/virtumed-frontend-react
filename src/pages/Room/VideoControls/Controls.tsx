import * as Styled from './styles';
import {
  AudioOutlined,
  MessageOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const VideoControls = () => {


  return (
    <Styled.ControlContainer>
      <div>
        <AudioOutlined />
      </div>
      <div>
        <VideoCameraOutlined />
      </div>
      <div>
        <MessageOutlined />
      </div>
    </Styled.ControlContainer>
  )
}

export default VideoControls;