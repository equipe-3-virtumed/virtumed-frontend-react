import styled from "styled-components";

export const ControlContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;

  transition: all ease 0.5s;

  @media screen and (min-aspect-ratio: 16/10) {
    width: 10vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
  }
`