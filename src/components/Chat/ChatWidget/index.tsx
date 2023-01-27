import React, { useEffect, useState } from "react";
import socket from "services/socket";
import ScrollToBottom from "react-scroll-to-bottom";
import * as Styled from "./styles";
import "./styles.module.css";
import { Typography } from "antd";

interface Props {
  username: string;
  room: string;
}

const ChatWidget = ({ username, room }: Props) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<any[]>([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        sender: username,
        room: room,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("chatToServer", messageData);
      setCurrentMessage("");
      return
    }
  };

  useEffect(() => {
    socket.on("chatToClient", (data) => {
      console.log(data);
      setMessageList([data]);
      console.log(messageList)
    });
  }, [socket]);

  return (
    <Styled.ContainerChat>
      <Styled.HeaderChat>
        <p>Chat de conversa</p>
      </Styled.HeaderChat>

      <Styled.ContentMsg>
        <ScrollToBottom className="scroll">
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className={
                username === messageContent.sender
                  ? "ContentSending"
                  : "ContentSender"
              }
            >
              <>
                <div
                  className={
                    username === messageContent.sender
                      ? "MsgSending"
                      : "MsgSender"
                  }
                >
                  <Typography>{messageContent.message}</Typography>
                </div>

                <div
                  className={
                    username === messageContent.sender
                      ? "MsgContentSending"
                      : "MsgContentSender"
                  }
                >
                  <Typography>{messageContent.time}</Typography>
                  <Typography style={{ marginLeft: "8px", fontWeight: "bold" }}>
                    {messageContent.sender}
                  </Typography>
                </div>
              </>
            </div>
          ))}
        </ScrollToBottom>
      </Styled.ContentMsg>

      <Styled.BoxInput>
        <input 
            style={{
                height: '100%',
                display: 'flex',
                outline: 'none',
                padding: '12px 0',
                flexBasis: '80%'
            }}
            type='text'
            value={currentMessage}
            placeholder="Mensagem"
            onChange={(e) => {
                setCurrentMessage(e.target.value)
            }}
            onKeyDown={(e) => {
                e.key === 'Enter' && sendMessage();
            }}
        />

        <Styled.BtnMsg onClick={sendMessage}>Enviar</Styled.BtnMsg>
      </Styled.BoxInput>
    </Styled.ContainerChat>
  );
};

export default ChatWidget;
