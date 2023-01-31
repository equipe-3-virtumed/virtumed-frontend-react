import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "services/api";
import * as Styled from "./styles";
import VideoChat from "./VideoChat";

const Room = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const getAuthorization = () => {
    api.get(`appointment/connect/${roomId}`)
      .then(() => {        
          setTimeout(() => {
            setLoading(false);
            setAuthorized(true);
          }, 5000);        
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
    loading && !authorized ?
      <Styled.RoomContainer>
        <Spin size="large" />
        <h3>Aguarde um momento</h3>
        <h4>Estamos preparando sua consulta!</h4>
      </Styled.RoomContainer>
    :
      <VideoChat />
  )
}

export default Room;