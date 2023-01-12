import styled from "styled-components";

interface IconButtonProps {
    IsActive: boolean;
}

export const Img = styled.img`
  margin-top: 1rem;
  width: 360px;
  height: 30px;
  /* padding: 5px, 5px;
  margin: 5px, 5px; */
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #FFF; */
`;

export const VideoContainer = styled.div`
  width: 85%;
  min-height: 65%;
  margin: 15px;
  background-color: #333333;
  border: solid 15px ${(props) => (props.theme.body)};
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
    /* @media (min-width: 920px) {
      min-width: 95%;
      min-height: 75%; 
    } */
  /* @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow-y: scroll;
    video {
      margin: 20px 0;
    }
  } */
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 5%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem;
  margin-bottom: 1.2rem;

  @media (min-width: 800px) {
      margin: 0.9rem;
    }
`;

export const IconButton = styled.button<IconButtonProps>`
  width: 60px;
  height: 60px;
  border-radius: 32px;
  /* background-color: ${(props) => (props.IsActive ? props.theme.text : props.theme.body)}; */
  border-image: linear-gradient(45deg, rgb(229,65,151), rgb(82,35,173)) 1;
  margin: 0 10px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #ddd;
  transition: 0.3s;
  cursor: pointer;
  color: ${(props) => (props.IsActive ? props.theme.body : props.theme.text)};
  :hover {
    opacity: 0.5;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  width: 90%;
  height: 15%;
  position: relative;
  border-radius: 32px;
  border-style: solid;
  border-width: 3px;
  border-image: linear-gradient(45deg, rgb(229,65,151), rgb(82,35,173)) 1;
  color: #000;

   @media (min-width: 980px) {
    display: none; 
   }
`;