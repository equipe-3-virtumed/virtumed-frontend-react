import styled from "styled-components";

export const ToggleIcon = styled.i`
  width: 2rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: all 0.6s ease-out;
  text-align: left;
  &:hover {
    transform: scale(1.1);
  }
`;