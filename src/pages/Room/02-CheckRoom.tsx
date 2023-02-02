import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CheckCircleOutlined } from "@ant-design/icons"
import * as Styled from "./styles";
import Header from "components/Header";
import { Button, Spin } from "antd";
import socket from "services/socket";
import { useRoom } from "contexts/roomContext";
import VideoChatRoom from "./03-VideoChatRoom";
import { useAuth } from "contexts/authContext";

const CheckRoom = () => {

  const { roomId } = useParams();
  const { loading } = useAuth();
  const { roomAdmin, roomReady, localParticipant, participant,
          setRoomReady } = useRoom();

  const [ready, setReady] = useState<boolean>(false);

  const imReady = () => {
    const credentials = {
      roomId,
      localParticipant: localParticipant?.id
    }
    setReady(true);
    socket.emit('ready', credentials); 
  }
  
  const emitReady = () => {
    const credentials = {
      roomId,
      localParticipant: localParticipant?.id
    }
    socket.emit('ready', credentials);   
    setRoomReady(true);
    setReady(true);
  }

  return (
    <>
      {
        roomReady && ready ?
          <VideoChatRoom />
        :
          <>
            <Header />
            <Styled.CheckRoom>
              <h2>Olá {localParticipant?.name}</h2>
              <h3>{localParticipant?.id}</h3>

              {
                roomAdmin ?
                  <Button type="primary" onClick={emitReady}>
                    Liberar Consulta
                  </Button>
                :
                roomReady && !loading ?
                  <>
                    <Button type="primary" onClick={imReady}>
                      Entrar na Consulta
                    </Button>
                    <CheckCircleOutlined />
                  </>
                :
                  <>
                    <Spin size="small" /> 
                    <h4>Aguardando...</h4>
                  </>
              }
                            
              <h3>{participant?.name}</h3>
            </Styled.CheckRoom>
          </>
      }
    </>
  )
}

export default CheckRoom;