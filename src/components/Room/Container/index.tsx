import { useMeeting } from "@videosdk.live/react-sdk";
import { useState } from "react";
import VideoComponent from "../VideoComponent";

const Container = (props: { meetingId: string }) => {
  const [joined, setJoined] = useState(false);
  const { join, participants } = useMeeting();
  const joinMeeting = () => {
    setJoined(true);
    join();
  };

  return (
    <div className="container">
      <h3>Meeting Id: {props.meetingId}</h3>
      {joined ? (
        <div>
          {[...participants.keys()].map((participantId) => (
            <VideoComponent participantId={participantId} />
          ))}
        </div>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
};

export default Container;
