import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Body = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
  transition: all 0.6s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  margin-top: 1rem;
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
