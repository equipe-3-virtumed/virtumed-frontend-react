import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";

const VideoComponent = (props: any) => {
  const micRef: any = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal } = useParticipant(
    props.participantId
    );
  console.log("🚀 ~ file: index.tsx:10 ~ VideoComponent ~ webcamStream", webcamStream)
  console.log(
    "🚀 ~ file: index.tsx:12 ~ VideoComponent ~ props.participantId",
    props.participantId
  );

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {

      const mediaStream = new MediaStream([webcamStream.track]);
      console.log("🚀 ~ file: index.tsx:19 ~ videoStream ~ webcamStream.track", webcamStream.track)
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream([micStream.track]);
        console.log("🚀 ~ file: index.tsx:28 ~ useEffect ~ micStream.track", micStream.track)

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error: any) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div key={props.participantId}>
      {micOn && micRef && <audio ref={micRef} autoPlay muted={isLocal} />}
      {webcamOn && (
        <ReactPlayer
          //
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={true}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"250px"}
          width={"250px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
};

export default VideoComponent;
