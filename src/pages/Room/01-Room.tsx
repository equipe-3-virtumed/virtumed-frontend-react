import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import Header from "components/Header";
import { useNavigate, useParams } from "react-router";
import api from "services/api";
import socket from "services/socket";
import { useRoom } from "contexts/roomContext";
import { useAuth } from "contexts/authContext";
import CheckRoom from "./02-CheckRoom";
import * as Styled from "./styles";

const Room = () => {
  const navigate = useNavigate();

  const { roomId } = useParams();
  const { user } = useAuth();
  const { setRoomAdmin, setLocalParticipant, setParticipant } = useRoom();

  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

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
          <CheckRoom />
      }
    </>
  )
}

export default Room;