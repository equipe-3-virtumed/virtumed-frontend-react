import styled from "styled-components";

export const ChatContainer = styled.div`
  margin: 2rem;
  display: flex;
  width: 90%;
  height: 60%;
  position: relative;
  border: double 2px transparent;
  border-radius: 20px;
  border-image: linear-gradient(45deg, rgb(229, 65, 151), rgb(82, 35, 173)) 1;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, red, blue);
  background-origin: border-box;
  background-clip: content-box, border-box;
  color: #000;

  div {
    margin-left: 1rem;
  }

  @media (min-width: 980px) {
    display: flex;
  }
`;
