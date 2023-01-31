import * as Styled from "./styles";
import { useAuth } from "contexts/authContext";
import Header from "components/Header";
import { Button, Spin } from "antd";
import { useEffect } from "react";
import socket from "services/socket";
import { useParams } from "react-router";
import { useRoom } from "contexts/roomContext";

const SetRoom = () => {

  const { roomId } = useParams();
  const { loading, getLoader } = useAuth();
  const { localParticipant, localParticipantReady, setLocalParticipantReady,
          participant, participantReady, setParticipantReady } = useRoom();
  
  const emitReady = () => {
    const credentials = {
      roomId,
      localParticipant: localParticipant?.id
    }
    socket.emit('ready', credentials);
    setLocalParticipantReady(true);  
    getLoader(5000);
  }
  
  useEffect(() => {
    socket.on('readyToGo', (userId) => {
      if (userId !== localParticipant?.id) {
        setParticipantReady(true);
      }
    })    
  }, [socket])
  
  return (
    <>
      <Header />
      <Styled.SetRoom>
        <h2>Olá {localParticipant?.name}</h2>
        <h3>{localParticipant?.id}</h3>
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
        <h3>Consulta com {participant?.name}</h3>
        <h3>{participantReady && "Está pronto"}</h3>
      </Styled.SetRoom>
    </>
  )
}

export default SetRoom;