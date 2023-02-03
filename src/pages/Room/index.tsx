import { Spin } from "antd";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "services/api";
import socket from "services/socket";
import * as Styled from "./styles";
import SetRoom from "./SetRoom";
import { useRoom } from "contexts/roomContext";
import { useAuth } from "contexts/authContext";
import { MeetingProvider, MeetingConsumer } from "@videosdk.live/react-sdk";
import { videoToken, createMeeting } from "../../api";
import JoinScreen from "../../components/Room/JoinScreen";
import Container from "../../components/Room/Container";

const Room = () => {
  const navigate = useNavigate();
  const [meetingId, setMeetingId] = useState(null);


  const { roomId } = useParams();
  const { setRoomAdmin, setLocalParticipant, setParticipant } = useRoom();
  const { user } = useAuth();

  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const getMeetingAndToken = async (id: string | null) => {
  const meetingId =
    id === null ? await createMeeting({ token: videoToken }) : id;
    setMeetingId(meetingId);
  };

  const getAuthorization = () => {
    api.get(`appointment/connect/${roomId}`)
      .then((res) => {
          socket.emit("joinRoom", roomId);
          setTimeout(() => {
            setLoading(false);
            setAuthorized(true);
          }, 1000);
          if (res.data.userRole === 'doctor') {
            setRoomAdmin(true);
            setLocalParticipant(user);
            setParticipant(res.data.patient);
          } else {
            setLocalParticipant(user);
            setParticipant(res.data.doctor);
          }
        })
      .catch(() => {
        alert('Você não tem acesso a esta consulta');
        navigate('/')
      })
  }

  useEffect(() => {
    if (!authorized) {
      getAuthorization();
    }
  }, [])

  return (
    <>
      <Header />
      {
          loading && !authorized ?
          <Styled.RoomContainer>
            <Spin size="large" />
            <h3>Aguarde um momento</h3>
            <h4>Estamos preparando a consulta :)</h4>
          </Styled.RoomContainer>
        :
          <SetRoom />
      }
      {
      videoToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "Bruno",
      }}
      token={videoToken}
    >
      <MeetingConsumer>
        {() => <Container meetingId={meetingId} />}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
      }
    </>
  )
}

export default Room;
