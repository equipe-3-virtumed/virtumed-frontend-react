import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Body = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.body};
  transition: all 0.6s ease-in-out;
`;

export const BackIcon = styled.i`
  font-size: 2.5rem;
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 25px;
  left: 50px;
  cursor: pointer;
  transition: all 0.6s ease-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: auto;
`;

export const ToggleIcon = styled.i`
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.6s ease-out;
  position: relative;
  top: 10px;
  left: 40%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  width: 360px;
  height: 50px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: ${(props) => props.theme.text};
`;

export const Label = styled.label`
  line-height: 250%;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  transition: all 0.6s ease-out;
`;

export const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0 5rem;
  border: transparent;
  border-radius: 15px;
  height: 40px;
  background-color: #1677ff;
  color: #f4f5f9;
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
  transition: all 0.6s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #f4f5f9;
    color: #1677ff;
  }
`;
