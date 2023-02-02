import { useState } from "react";

interface JoinScreenProps {
  getMeetingAndToken: (id: string | null) => void;
}

const JoinScreen = ({ getMeetingAndToken }: JoinScreenProps) => {
  const [meetingId, setMeetingId] = useState<string | null>(null);
  const onClick = () => {
    getMeetingAndToken(meetingId);
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
