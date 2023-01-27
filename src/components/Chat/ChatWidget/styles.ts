import styled from "styled-components";

export const ContainerChat = styled.div`
  height: 70%;
  margin: auto;
  background-color: #f4f5f9;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const HeaderChat = styled.div`
  height: 3rem;
  padding: 0 2.5rem;
  border-radius: 6px;
  background-color: #000;

  p {
    display: block;
    padding: 8px 0;
    text-align: center;
    line-height: 2.5rem;
    color: #f4f5f9;
  }
`;

export const ContentMsg = styled.div`
  height: 85%;
  border: 1px solid #000;
  background-color: #f4f5f9;
`;

export const BoxInput = styled.div`
  height: 2.5rem;
  border: 1px solid #000;
  display: flex;
`;

export const BtnMsg = styled.button`
  height: 100%;
  display: flex;
  flex-basis: 20%;
  justify-content: center;
  outline: none;
  color: #f4f5f9;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  background-color: #4f46e5;
`;
