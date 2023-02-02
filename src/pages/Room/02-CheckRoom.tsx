import { CheckCircleOutlined } from "@ant-design/icons"
import * as Styled from "./styles";
import Header from "components/Header";
import { Button, Spin } from "antd";
import { useRoom } from "contexts/roomContext";
import VideoChatRoom from "./03-VideoChatRoom";
import { useSocket } from "./Contexts/Sockets";
import { useEffect } from "react";

const CheckRoom = () => {

  const { roomId, roomAdmin, roomReady, localParticipant, participant } = useRoom();
  
  const { localSocketId, participantSocket, emitId, callUser, answerCall } = useSocket();

  useEffect(() => {
    emitId(roomId)
  }, [])

  return (
    <>
      {
        roomReady ?
          <VideoChatRoom />
        :
          <>
            <Header />
            <Styled.CheckRoom>
              <h2>Olá {localParticipant?.name}</h2>
              <h3>{localSocketId}</h3>

              {
                roomAdmin ?
                  <Button type="primary" onClick={callUser}>
                    Chamar Paciente
                  </Button>
                :
                roomReady ?
                  <>
                    <Button type="primary" onClick={answerCall}>
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
              <h4>{participantSocket}</h4>
            </Styled.CheckRoom>
          </>
      }
    </>
  )
}

export default CheckRoom;