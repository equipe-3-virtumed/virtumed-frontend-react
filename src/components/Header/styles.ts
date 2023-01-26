import styled from "styled-components";

export const Header = styled.header`
  display: block;
  position: fixed;
  z-index: 19;
  width: 100vw;
  height: auto;
  border: transparent;
  padding: 0.5rem 2rem 0.5rem 1.5rem;
	background: ${(props) => props.theme.body};
  transition: all 0.6s ease-in-out;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.5rem;
`;

export const Logo = styled.img`
  height: 2.5rem;
`;
