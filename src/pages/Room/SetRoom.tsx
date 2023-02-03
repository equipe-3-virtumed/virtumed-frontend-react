import * as Styled from "./styles";
import { useAuth } from "contexts/authContext";
import Header from "components/Header";
import { Button, Spin } from "antd";
import { useEffect } from "react";
import socket from "services/socket";
import { useParams } from "react-router";
import { useRoom } from "contexts/roomContext";
import { CheckCircleOutlined } from "@ant-design/icons"
import ChatRoom from "./ChatRoom";

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
      {
        localParticipantReady && participantReady ?
          <ChatRoom />
        :
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
              <h3>{participant?.name}</h3>
              {participantReady ?
                <h3>
                  <CheckCircleOutlined style={{
                    color: "green",
                    fontSize: "1rem"
                  }}
                /> Já está na sala!</h3>
                :
                <Spin size="small" />
              }
            </Styled.SetRoom>        
          </>
      }      
    </>
  )
}

export default SetRoom;