import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: fixed;
  z-index: 15;
  animation: go-back 1s;
  animation-direction: alternate-reverse;

  @keyframes go-back {
    from {
      transform: translateX(100vw);
    }
    to {
      transform: translateX(0);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;

    img {
      height: 35px;
    }
  }
`; 
