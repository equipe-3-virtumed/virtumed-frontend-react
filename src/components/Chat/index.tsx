import React, { useState } from "react";
import socket from "services/socket";
import * as Styled from "./styles";
import ChatWidget from "./ChatWidget";

const ChatContainerTesting = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (name !== "" && room !== "") {
      socket.emit("joinRoom", room);
      setShowChat(true);
    }
  };

  return (
    <Styled.Container>
      {!showChat ? (
        <Styled.Chat>
          <div style={{ width: "100%" }}>
            <h1>Join a chat</h1>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="room"
                style={{
                  marginTop: "12px",
                  fontSize: "20px",
                  lineHeight: "28px",
                }}
              >
                Room Id
              </label>
              <input
                style={{
                  padding: "8px",
                  marginTop: "12px",
                  border: "1px solid #4f46e5",
                }}
                id="room"
                type="text"
                placeholder="Room Id..."
                onChange={(e) => {
                  setRoom(e.target.value);
                }}
              />

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
        <ChatWidget username={name} room={room} />
      )}
    </Styled.Container>
  );
};

export default ChatContainerTesting;
