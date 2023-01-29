import styled from "styled-components";

export const ContainerChat = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #000;
`;

// export const HeaderChat = styled.div`
//   height: 3rem;
//   padding: 0 2.5rem;
//   border-radius: 6px;
//   background-color: #000;

//   p {
//     display: block;
//     padding: 8px 0;
//     text-align: center;
//     line-height: 2.5rem;
//     color: #f4f5f9;
//   }
// `;

export const ContentMsg = styled.div`
  height: 100%;
  width: auto;
  background-color: #c7d2fe;
`;

export const BoxInput = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
`;

export const BtnMsg = styled.button`
  height: 100%;
  width: 100%;
  display: block;
  flex-basis: 20%;
  outline: none;
  color: #f4f5f9;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  line-height: 1.75rem;
  background-color: #4D22A1;
  cursor: pointer;
`;
