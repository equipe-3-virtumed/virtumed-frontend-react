import styled from "styled-components";

export const RoomContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.text};
  overflow: hidden;
`

export const CheckRoom = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.text};
`

export const LocalVideo = styled.div`
  width: auto;
  height: 20%;
  position: absolute;
  bottom: 12vh;
  right: 1rem;
  z-index: 1;

  @media screen and (min-aspect-ratio: 16/10) {
    bottom: 1rem;
    right: 15vh;
  }
`

export const ParticipantVideo = styled.div`
  width: max-content;
  height: 90vh;
  position: absolute;
  top: 0;

  @media screen and (min-aspect-ratio: 16/10) { 
    height: 100vh;
  }
`
