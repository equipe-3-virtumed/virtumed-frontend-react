import styled from "styled-components";

export const Container = styled.main`
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
  
  p {
		text-align: center;
		padding: 1rem;
		font-weight: 500;
	}

	h3 {
		text-align: center;
		margin-top: 32px;
	}

	h4 {
		margin-left: 16px;
	}

	:before {
		content: "";
		filter: opacity(70%) blur(0.1rem);
		position: absolute;
		z-index: -1;
		width: 100vw;
		height: 100vh;
		background-size: cover;
		background-position: 50% 0px;
		background-repeat: no-repeat;
		background-image: url("imgs/background-main.png");

		@media (max-width: 27rem) {
			height: 17rem;
		}
	}

	footer {
		div {
			display: flex;
			justify-content: space-between;
			padding: 0 16px;
		}

		p {
			font-weight: 300;
		}
	}
`;

export const Carousel = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		font-weight: 400;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const Button = styled.button`
	padding: 8px 18px;
	margin: 16px;
	background-color: #5223ad;
	color: #fff;
	border-radius: 8px;
	cursor: pointer;
	border: none;
	font-size: large;
`;

export const ContainerInformation = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	p {
		font-weight: 300;
	}

	div {
		background-color: rgba(255, 255, 255, 0.7);
		width: 150px;
		height: 150px;
		display: flex;
		align-items: center;
		margin: 2.1rem;
		box-shadow: 0 0 16px 0 #0004;
		:nth-child(1) {
			border-radius: 0 0 16px 0;
		}
		:nth-child(2) {
			border-radius: 0 0 0 16px;
		}
		:nth-child(3) {
			border-radius: 0 16px 0 0;
		}
		:nth-child(4) {
			border-radius: 16px 0 0 0;
		}
	}
`;

export const ContainerCarouselClients = styled.div`
	display: flex;
	justify-content: center;
`;

export const ContainerQuestions = styled.section`
	background-image: linear-gradient(to right, #fc7fbd, #66d3e2);
	padding: 16px 0;
	margin: 32px 0;

	p {
		font-weight: 300;
	}
`;
