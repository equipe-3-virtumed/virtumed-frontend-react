import styled from "styled-components";

export const ControlContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;

  transition: all ease 0.5s;

  @media screen and (min-aspect-ratio: 16/10) {
    width: 10vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    right: 0;
  }

  div {
    width: 5rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media screen and (min-aspect-ratio: 16/10) {
      width: 3rem;
      height: 3rem;
    }
  }

  svg {
    font-size: 1.6rem;
  }
`