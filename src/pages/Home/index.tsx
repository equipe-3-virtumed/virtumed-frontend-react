import * as Styled from "./styles";
import {
  TransitionText,
  CarouselInformation,
  CarouselClients,
} from "components/Animations";
import Header from "components/Header";
import { SwapRightOutlined, LinkedinOutlined } from "@ant-design/icons";
import Logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <>
      <Header />
      <Styled.Container>

        <TransitionText />

        <p style={{ textAlign: "start" }}>
          Solução completa para gerenciamento de consultas, pacientes e
          profissionais, tudo em um só lugar.
        </p>

        <Styled.Carousel>
          <CarouselInformation />
        </Styled.Carousel>

        <Styled.ButtonContainer>
          <a href="https://www.virtumed.com.br/service/telemedicine">
            <Styled.Button>Saiba mais</Styled.Button>
          </a>
        </Styled.ButtonContainer>

        <section>
          <h3>Múltiplas soluções</h3>
          <p>
            Através da cocriação com nossos clientes, reunimos em uma única
            plataforma as soluções mais relevantes para clínicas e profissionais
            da área de saúde se conectarem com seus clientes.
          </p>
          <h3>Alto desempenho</h3>

          <Styled.ContainerInformation>
            <div>
              <p>+5 mil consultas mensais</p>
            </div>
            <div>
              <p>+5 mil horas mensais de consultas</p>
            </div>
            <div>
              <p>+500 médicos cadastrados</p>
            </div>
            <div>
              <p>+500 médicos cadastrados</p>
            </div>
          </Styled.ContainerInformation>
        </section>

        <section>
          <h3>Já estão conectados</h3>
          <Styled.ContainerCarouselClients>
            <CarouselClients />
          </Styled.ContainerCarouselClients>
        </section>

        <Styled.ContainerQuestions>
          <div>
            <SwapRightOutlined style={{ fontSize: "40px", marginLeft: "16px" }} />
            <h4>Ainda em dúvida?</h4>
          </div>
          <p style={{ textAlign: "start" }}>
            Se ainda está em dúvida se a Virtumed é a solução ideal para você ou
            sua empresa, entre em contato conosco e agende uma reunião.
          </p>
          <a href="https://api.whatsapp.com/send/?phone=5511968969999">
            <Styled.Button>Entre em contato</Styled.Button>
          </a>
        </Styled.ContainerQuestions>

        <footer>
          <div>
            <img src={Logo} alt="logo-virtumed" />
            <a
              style={{ color: "inherit" }}
              href="https://www.linkedin.com/company/virtumedbr/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinOutlined style={{ fontSize: "35px" }} />
            </a>
          </div>
          <p style={{ textAlign: "start" }}>
            A Virtumed é uma healthtech que desenvolve soluções direcionadas para
            a melhor experiência dos pacientes e profissionais da saúde,
            integrando os sistemas com as melhores tecnologias disponíveis no
            mercado.
          </p>
          <p style={{ fontSize: "12px" }}>
            © Todos os direitos reservados - {new Date().getFullYear()}
          </p>
        </footer>
      </Styled.Container>
    </>    
  );
};

export default Home;
