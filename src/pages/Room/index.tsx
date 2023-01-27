import "./styles";
import React, { useState } from "react";
import { MeetingProvider, MeetingConsumer } from "@videosdk.live/react-sdk";
import { authToken, CreateMeeting } from "../../api";
import JoinScreen from "../../components/Room/JoinScreen";
import Container from "../../components/Room/Container";

const Room = () => {
  const [meetingId, setMeetingId] = useState<string>('');

  const getMeetingAndToken = async (id: string) => {
    const meetingId =
      id == null ? await CreateMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingConsumer>
        {() => <Container meetingId={meetingId} />}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
};

export default Room;
