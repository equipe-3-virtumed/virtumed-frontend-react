import React, { useState } from "react";
import socket from "services/socket";
import * as Styled from "./styles";
import ChatWidget from "./ChatWidget";
import { useParams } from "react-router";

const ChatContainerTesting = () => {
  const [name, setName] = useState("");
  const [showChat, setShowChat] = useState(false);

  const { roomId } = useParams();

  const joinRoom = () => {
    if (name !== "") {
      socket.emit("joinRoom", roomId);
      setShowChat(true);
    }
  };

  return (
    <Styled.Container>
      {/* {!showChat ? (
        <Styled.Chat>
          <div style={{ width: "100%" }}>
            <h1>Join a chat</h1>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="name"
                style={{
                  marginTop: "12px",
                  fontSize: "20px",
                  lineHeight: "28px",
                }}
              >
                Name
              </label>
              <input
                style={{
                  padding: "8px",
                  marginTop: "12px",
                  border: "1px solid #4f46e5",
                }}
                id="name"
                type="text"
                placeholder="Name..."
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <button
                style={{
                  marginTop: "12px",
                  display: "block",
                  backgroundColor: "#4f46e5",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#f4f5f9",
                  padding: "8px",
                }}
                onClick={joinRoom}
              >
                Entrar
              </button>
            </div>
          </div>
        </Styled.Chat>
      ) : (
        <ChatWidget username={name} room={roomId} />
      )} */}
      <ChatWidget username={name} room={roomId} />
    </Styled.Container>
  );
};

export default ChatContainerTesting;
