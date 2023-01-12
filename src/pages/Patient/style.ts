import styled from "styled-components";

const size = {
  laptop: '1024px',
  tablet: '760px',
  mobileG: '560px',
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
  margin: 0;
  padding: 0;
  text-align: center;

  @media (max-width: ${size.tablet}) {
    height: 100%;
  }
`;

export const Body = styled.div`
  background: ${(props) => props.theme.body};
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: all .6s ease-in-out;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: auto;
  padding-top: 7.3rem;
  padding-bottom: 1rem;
`;

export const Infos = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem 5rem;

  @media (max-width: ${size.laptop}) {
    gap: 1.5rem 1.5rem
  }

  @media (max-width: ${size.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContainerInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  box-shadow: 6px 10px 6px 10px #00000050;
  border-radius: 6px;
  background-color: #f4f5f9;
  cursor: pointer;
  transition: all 1.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Picture = styled.img`
  width: 285px;
  height: 240px;

  @media (max-width: ${size.laptop}) {
    width: 240px;
    height: 215px;
  }

  @media (max-width: ${size.tablet}) {
    height: 240px;
  }

  @media (max-width: ${size.mobileG}) {
    width: 190px;
    height: 175px;
  }
`;
