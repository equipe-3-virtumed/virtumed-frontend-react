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
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.5rem;

  svg {
    color: ${(props) => props.theme.text};
    transition: all 0.6s ease-out;
  }
`;

export const ToggleButtonHeaderModal = styled.nav`
display: flex;
align-items: center;
gap: 2rem;`

export const Logo = styled.img`
  height: 2.5rem;
`;
