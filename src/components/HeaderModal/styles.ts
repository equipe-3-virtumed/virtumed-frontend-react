import styled from "styled-components";

export const Container = styled.section`
	position: fixed;
	display: flex;
  flex-direction: column;
	height: 100vh;
	width: 100vw;
  padding: 20px 40px 30px;
  background: ${(props) => props.theme.body};
	z-index: 20;
	animation: go 1s;

	@keyframes go {
		from {
			transform: translateX(100vw);
		}
		to {
			transform: translateX(0);
		}
	}
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 2rem;
  }

  svg {
    color: ${(props) => props.theme.text};
    transition: all 0.6s ease-out;
  }
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 0px;
  gap: 6px;
  font: 400 1.125rem Poppins, sans-serif;
  color: ${(props) => props.theme.text};

  div {
    cursor: pointer;
  }

  a {
    color: ${(props) => props.theme.text};
  }
`