import React, { useEffect } from "react";
import api from "services/api";
import { useParams } from "react-router";
import { useAuth } from "contexts/authContext";
import Login from "pages/Login";

const Room = () => {
  const { roomId } = useParams();
  const { needed, setNeeded, logged, logout } = useAuth();

  useEffect(() => {
    if (logged) {
      api.get(`room/connect/${roomId}`)
      .then(res => {
        // console.log("🚀 ~ file: index.tsx:23 ~ Room ~ res", res)
      })
      setNeeded(false)
    } else {
      setNeeded(true)
    }
  }, [])
  
  return (
    needed ? <Login /> :
    <>
      <div>
        <h2>
          <button onClick={logout}>
            logout
          </button>
          Hello
        </h2>
      </div>
    </>
  )
}

export default Room;
