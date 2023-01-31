import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "services/api";
import * as Styled from "./styles";

const Room = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const getAuthorization = () => {
    api.get(`appointment/connect/${roomId}`)
    .then(() => {
        setAuthorized(true);
        setLoading(false);
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
      <Styled.Container>
        <Spin size="large" />
        Aguarde um momento enquanto validamos seus dados
      </Styled.Container>
    :
      <div>
        <h2>Olá, eu sou a Room =)</h2>
      </div>
  )
}

export default Room;