import { CheckCircleOutlined } from "@ant-design/icons"
import * as Styled from "./styles";
import Header from "components/Header";
import { Button, Spin } from "antd";
import { useRoom } from "pages/Room/Contexts/roomContext";
import VideoChatRoom from "./03-VideoChatRoom";
import { useSocket } from "./Contexts/Sockets";
import { useEffect } from "react";
import { useStreamSource } from "./Contexts/StreamSource";

const CheckRoom = () => {

  const { roomId, roomAdmin, roomReady, localParticipant, participant } = useRoom();
  
  const { participantSocket, callAccepted, emitId, callUser, answerCall } = useSocket();

  const { getStream } = useStreamSource();
  
  useEffect(() => {
    emitId(roomId)
    getStream()
  }, [])

  return (
    <>
      {
        callAccepted ?
          <VideoChatRoom />
        :
          <>
            <Header />
            <Styled.CheckRoom>
              <h2>Olá {localParticipant?.name}</h2>

              {
                roomAdmin ?
                  <Button type="primary" onClick={callUser} disabled={participantSocket ? false : true}>
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
            </Styled.CheckRoom>
          </>
      }
    </>
  )
}

export default CheckRoom;