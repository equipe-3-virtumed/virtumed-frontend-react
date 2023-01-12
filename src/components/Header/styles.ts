import styled from "styled-components";

export const Header = styled.header`
  display: block;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: auto;
  border: transparent;
  padding: 1rem 1.5rem .6rem 1.5rem;
  background: ${(props) => props.theme.headerBackground};
  transition: all .6s ease-in-out;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.5rem;
  height: 3.5rem;
`;

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;
