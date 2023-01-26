import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
`;

export const Body = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
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

export const ToggleIcon = styled.i`
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.6s ease-out;
  position: relative;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

export const Label = styled.label`
  line-height: 250%;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  transition: all 0.6s ease-out;
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.6s ease-out;
  color: ${(props) => props.theme.text};

  &:hover {
    color: #1677ff;
    text-decoration: underline;
  }
`;

export const Button = styled.button`
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

export const Register = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;

  a {
    font-weight: 600;
    font-size: 1.4rem;
    text-decoration: none;
    color: ${(props) => props.theme.text};
    cursor: pointer;
    transition: all 0.6s ease-out;

    &:hover {
      color: #1677ff;
    }
  }
`;
