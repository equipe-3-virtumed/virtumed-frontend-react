import { useState } from "react";
import { LocalParticipant } from "twilio-video";

interface ToggleVideoParams {
  localParticipant: LocalParticipant | undefined;
}

const useVideo = (): {
  isCameraOn: boolean;
  toggleVideo: (data: ToggleVideoParams) => void;
} => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  console.log("🚀 ~ file: useVideo.ts:13 ~ isCameraOn", isCameraOn)

  const toggleVideo = ({ localParticipant }: ToggleVideoParams) => {
    if (!localParticipant) return;
    // const track = [...localParticipant?.videoTracks.values()][0].track;
    const track = Array.from(localParticipant.videoTracks.values())[0].track;
    if (isCameraOn && localParticipant) {
      track.stop();
      track.disable();
    } else {
      track.restart();
      track.enable();
    }

    setIsCameraOn(!isCameraOn);
  };

  return { isCameraOn, toggleVideo };
};

export { useVideo };

// const { connect, createLocalVideoTrack } = require('twilio-video');

// // Create a LocalVideoTrack that captures video from the front-facing camera.
// createLocalVideoTrack({ facingMode: 'user' }).then(function(localVideoTrack: any) {
//   return connect('token', {
//     name: 'my-cool-room',
//     tracks: [localVideoTrack]
//   });
// }).then(function(room: any) {
//   // Restart the LocalVideoTrack to capture video from the back-facing camera.
//   const localVideoTrack = Array.from(room.localParticipant.videoTracks.values())[0].track;
//   return localVideoTrack.restart({ facingMode: 'environment' });
// });