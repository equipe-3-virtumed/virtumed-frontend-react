import styled from "styled-components";

const size = {
  laptop: "1200px",
  tablet: "790px",
  mobileG: "560px",
  mobileP: "390px",
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.background};
  margin: 0;
  padding: 0;
  text-align: center;

  @media (max-width: ${size.tablet}) {
    height: auto;
  } ;
`;

// export const Body = styled.div`
//   background: ${(props) => props.theme.body};
//   width: 100vw;
//   height: 100vh;
//   margin: 0;
//   padding: 0;
//   text-align: center;
//   transition: all 0.6s ease-in-out;

//   @media (max-width: ${size.mobileG}) {
//     height: auto;
//   }

//   @media (max-width: ${size.tablet}) {
//     height: 100vh;
//   }
// `;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: auto;
  padding-top: 4.4rem;
  padding-bottom: 1rem;
`;

export const Infos = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem 5rem;

  @media (max-width: ${size.laptop}) {
    gap: 1.5rem 1.5rem;
  }

  @media (max-width: ${size.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContainerInfo = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background-color: #f4f5f9;
  cursor: pointer;
  /* transition: all 1s ease-in-out;
  &:hover {
    transform: scale(1.1); */
  /* } */
`;

export const UpDiv = styled.div`
  /* position: absolute;
  top: 19rem; */

  background: linear-gradient(249.37deg, #4b58a0 15.61%, #0e2f9a 76.03%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  p {
    width: 114px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: #ffffff;
  }

  /* @media (max-width: ${size.laptop}) {
    top: 17.5rem;
  }

  @media (max-width: ${size.tablet}) {
    top: 15rem;
  } */
`;

export const DownDiv = styled.div`
  /* position: absolute;
  bottom: 2.5rem; */

  background: linear-gradient(249.37deg, #4b58a0 15.61%, #0e2f9a 76.03%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  p {
    width: 114px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: #ffffff;
  }
  /* 
  @media (max-width: ${size.laptop}) {
    bottom: 38.5rem;
  }

  @media (max-width: ${size.tablet}) {
    bottom: 13.5rem;
  }

  @media (max-width: ${size.mobileP}) {
    bottom: 0rem;
  } */
`;

export const MiddleDiv = styled.div`
  /* position: absolute; */
  /* top: 19rem; */

  background: linear-gradient(249.37deg, #4b58a0 15.61%, #0e2f9a 76.03%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  p {
    width: 114px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: #ffffff;
  }

  /* @media (max-width: ${size.laptop}) {
		top: 17.5rem;
	}

	@media (max-width: ${size.tablet}) {
		top: 27.5rem;
	} */
`;

export const Middle2Div = styled.div`
  /* position: absolute;
  bottom: 2.5rem; */

  background: linear-gradient(249.37deg, #4b58a0 15.61%, #0e2f9a 76.03%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  p {
    width: 114px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: #ffffff;
  }

  /* @media (max-width: ${size.laptop}) {
    bottom: 38.5rem;
  }

  @media (max-width: ${size.tablet}) {
    bottom: 26rem;
  }

  @media (max-width: ${size.mobileP}) {
    bottom: 11.7rem;
  } */
`;

export const Picture = styled.img`
  width: 265px;
  height: 210px;
  border-radius: 50px;

  @media (max-width: ${size.laptop}) {
    width: 240px;
    height: 215px;
  }

  @media (max-width: ${size.tablet}) {
    height: 240px;
  }

  @media (max-width: ${size.mobileG}) {
    width: 165px;
    height: 165px;
  }
`;
