import * as Styled from "./styles";
import { useAuth } from "contexts/authContext";
import Header from "components/Header";
import { Button, Spin } from "antd";
import { useEffect, useState } from "react";
import socket from "services/socket";
import { useParams } from "react-router";

interface UserSocket {
  socketId: string;
}

const SetRoom = () => {

  const { roomId } = useParams();
  const { user, roomAdmin, loading, socketId, getLoader } = useAuth();
  
  const [joined, setJoined] = useState<boolean>(false);
  const [imReady, setImReady] = useState<boolean>(false);
  const [participantReady, setParticipantReady] = useState<boolean>(false);
  
  console.log("🚀 ~ file: SetRoom.tsx:17 ~ SetRoom ~ socketId", socketId)
  
  const emitReady = () => {
    socket.emit('ready', roomId);
    setImReady(true);
    getLoader(5000);
  }
  
  return (
    <>
      <Header />
      <Styled.WaitingRoom>
        <h2>Olá {user?.name}</h2>
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
      </Styled.WaitingRoom>
    </>
  )
}

export default SetRoom;