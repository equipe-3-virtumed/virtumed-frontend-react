import styled from "styled-components";

export const RoomContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const CheckRoom = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LocalVideo = styled.div`
  width: auto;
  height: 20%;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 1;
`

export const ParticipantVideo = styled.div`
  width: auto;
  height: 90vh;
  position: absolute;
  top: 0;
`