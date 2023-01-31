import * as Styled from "./styles";
import { useAuth } from "contexts/authContext";
import Header from "components/Header";
import { Button, Spin } from "antd";
import { useEffect, useState } from "react";
import socket from "services/socket";
import { useParams } from "react-router";
import { useRoom } from "contexts/roomContext";

const SetRoom = () => {

  const { roomId } = useParams();
  const { user, loading, getLoader } = useAuth();
  const { localParticipant, roomAdmin } = useRoom();
  
  const emitReady = () => {
    socket.emit('ready', roomId);
    // setImReady(true);
    getLoader(5000);
  }
  
  // useEffect(() => {
  //   console.log("🚀 ~ file: SetRoom.tsx:15 ~ SetRoom ~ localParticipant", localParticipant)
    
  // }, [localParticipant])
  
  return (
    <>
      <Header />
      <Styled.SetRoom>
        <h2>Olá {localParticipant?.name}</h2>
        {
          loading ?
            <>
              <Spin size="large" />
              <h3>Verificando se estão todos prontos</h3>
            </>
          :
            <Button type="primary" onClick={emitReady}>
              Entrar na Consulta
            </Button>
        }
      </Styled.SetRoom>
    </>
  )
}

export default SetRoom;