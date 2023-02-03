import { useMeeting } from "@videosdk.live/react-sdk";

const Controls = () => {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <div>
      <button onClick={leave}>Leave</button>
      <button onClick={() => toggleMic}>toggleMic</button>
      <button onClick={() => toggleWebcam}>toggleWebcam</button>
    </div>
  );
};

export default Controls;
