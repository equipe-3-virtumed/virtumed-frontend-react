import * as Styled from "./styles";
import { useRoom } from "contexts/roomContext";
import { useParams } from "react-router";
import VideoPlayer from "./VideoPlayer";
import { useSocket } from "./SocketContext";
import { useEffect, useRef, useState } from "react";

const VideoChatRoom = () => {

  // const { roomId } = useParams();

  // const { localParticipant, localParticipantReady, setLocalParticipantReady,
  //         participant, participantReady, setParticipantReady } = useRoom();
  
  // const { localStream, participantStream } = useSocket();

  const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      const resizeListener = () => {
        // change width from the state object
        setWidth(getWidth())
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);

      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, [])

    return width;
  }
  
  const [localStream, setLocalStream] = useState<MediaStream>();
  const webcamRef = useRef<HTMLVideoElement | null>(null);
  
  const getStream = async () => {
    await navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: {
          // facingMode: "user",
          // width: 576,
          // height: 1024,
        }
      })
      .then((stream) => {
        setLocalStream(stream);
        webcamRef.current && (webcamRef.current.srcObject = stream);
      });
  }
  
  // const toggleVideo = () => {
  //   const videoTrack = localRef.current;
  //   if (videoTrack) {
  //     videoTrack.stop()
  //   }
  // }

  useEffect(() => {
    getStream()
  }, [webcamRef])

  return (
    <Styled.RoomContainer>
      <Styled.LocalVideo>
        <video ref={webcamRef} width={150}
                              autoPlay
                              playsInline
                              muted
                              />
      </Styled.LocalVideo>
      {/* <Styled.ParticipantVideo>
        <video ref={videoRef} width={useCurrentWidth()} autoPlay
                        playsInline
                        muted
                        controls />
      </Styled.ParticipantVideo> */}

    </Styled.RoomContainer>
  )
}

export default VideoChatRoom;