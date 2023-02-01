import React, { useEffect, useState } from "react";
import socket from "services/socket";
import ScrollToBottom from "react-scroll-to-bottom";
import * as Styled from "./styles";
import Styles from "./styles.module.css";
import { Typography } from "antd";
import moment from "moment";

interface Props {
  username: string | undefined;
  room: string | undefined;
}

interface MessageTypes {
  sender: string;
  room: string;
  message: string;
  time: string;
}

const ChatWidget = ({ username, room }: Props) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<MessageTypes[]>([]);

  const date = moment()
  const messageTime = date.get('hours') + ":" + date.get('minutes');

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        sender: username,
        room: room,
        message: currentMessage,
        time: messageTime,
      };

      await socket.emit("chatToServer", messageData);
      setCurrentMessage("");
      return;
    }
  };

  useEffect(() => {
    socket.on("chatToClient", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <Styled.ContainerChat>
      <Styled.ContentMsg>
        <ScrollToBottom className={Styles.Scroll}>
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className={
                username === messageContent.sender
                  ? Styles.ContentSender
                  : Styles.ContentSending
              }
            >
              <>
                <div
                  className={
                    username === messageContent.sender
                      ? Styles.MsgContentSender
                      : Styles.MsgContentSending
                  }
                >
                  <Typography style={{ fontWeight: "bold" }}>
                    {messageContent.sender}
                  </Typography>
                </div>

                <div
                  className={
                    username === messageContent.sender
                      ? Styles.MsgSender
                      : Styles.MsgSending
                  }
                >
                  <Typography style={{ fontWeight: "500", color: "#f4f5f9" }}>
                    {messageContent.message}
                  </Typography>
                </div>

                <div
                  className={
                    username === messageContent.sender
                      ? Styles.MsgContentSender
                      : Styles.MsgContentSending
                  }
                >
                  <Typography>{messageContent.time}</Typography>
                </div>
              </>
            </div>
          ))}
        </ScrollToBottom>
      </Styled.ContentMsg>

      <Styled.BoxInput>
        <input
          style={{
            height: "100%",
            width: "auto",
            display: "flex",
            outline: "none",
            flexBasis: "80%",
          }}
          type="text"
          value={currentMessage}
          placeholder="Mensagem"
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />

        <Styled.BtnMsg onClick={sendMessage}>Enviar</Styled.BtnMsg>
      </Styled.BoxInput>
    </Styled.ContainerChat>
  );
};

export default ChatWidget;
