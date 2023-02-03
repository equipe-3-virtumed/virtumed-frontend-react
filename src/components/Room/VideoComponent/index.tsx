import { useEffect, useMemo, useRef } from "react";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";

const VideoComponent = (props: any) => {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  const micRef: any = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal } = useParticipant(
    props.participantId
  );
  const navigate = useNavigate();

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStreamCam = new MediaStream([webcamStream.track]);
      // mediaStreamCam.addTrack(webcamStream.track);
      toggleWebcam(mediaStreamCam);

      return mediaStreamCam;
    }
  }, [toggleWebcam, webcamOn, webcamStream]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStreamMic = new MediaStream([micStream.track]);
        // mediaStreamMic.addTrack(micStream.track);
        toggleMic(mediaStreamMic);

        micRef.current.srcObject = mediaStreamMic;
        micRef.current
          .play()
          .catch((error: any) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn, toggleMic]);

  return (
    <div key={props.participantId}>
      {micOn && micRef && <audio ref={micRef} autoPlay muted={isLocal} />}
      <div>
        <button
          onClick={() => {
            leave();
            navigate("/consulta/entrar/id");
          }}
        >
          Leave
        </button>
        <button onClick={() => toggleMic()}>toggleMic</button>
        <button onClick={() => toggleWebcam()}>toggleWebcam</button>
      </div>
      <div style={{ backgroundColor: "#000", width: "300px", height: "300px" }}>
        {webcamOn && (
          <ReactPlayer
            //

            muted={true}
            playing={true}
            //

            url={videoStream}
            //
            height={"300px"}
            width={"300px"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
