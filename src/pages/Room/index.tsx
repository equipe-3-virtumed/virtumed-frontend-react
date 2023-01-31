import { Spin } from "antd";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "services/api";
import socket from "services/socket";
import * as Styled from "./styles";
import SetRoom from "./SetRoom";
import { useRoom } from "contexts/roomContext";

const Room = () => {
  const navigate = useNavigate();

  const { roomId } = useParams();
  const { setPatient, setDoctor, setRoomAdmin, setSocketId } = useRoom();

  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const getAuthorization = () => {
    api.get(`appointment/connect/${roomId}`)
      .then((res) => {
          socket.emit("joinRoom", roomId);
          setDoctor(res.data.doctor);
          setPatient(res.data.patient);
          if (res.data.userRole === 'doctor') {
            setRoomAdmin(true);
          }
          setTimeout(() => {
            setLoading(false);
            setAuthorized(true);
          }, 1000);
        })
      .then(() => {
      })
      .catch(() => {
        alert('Você não tem acesso a esta consulta');
        navigate('/')
      })
  }

  useEffect(() => {
    socket.on('joinedRoom', (socketId: string) => {
      setSocketId(socketId)      
    })
  }, [socket])

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
    </>
  )
}

export default Room;