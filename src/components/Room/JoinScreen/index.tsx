import { useState } from "react";

interface JoinScreenProps {
  getMeetingAndToken: (id: string) => void;
}

const JoinScreen = ({ getMeetingAndToken }: JoinScreenProps) => {
  const [meetingId, setMeetingId] = useState("");
  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <button onClick={onClick}>Join</button>
      {" or "}
      <button onClick={onClick}>Create Meeting</button>
    </div>
  );
};

export default JoinScreen;
