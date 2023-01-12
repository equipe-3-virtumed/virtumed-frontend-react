import {
  ExclamationCircleOutlined,
  DollarCircleOutlined,
  TeamOutlined,
  VideoCameraAddOutlined,
  SolutionOutlined,
  FundProjectionScreenOutlined,
  ReconciliationOutlined,
  CreditCardOutlined,
  VideoCameraOutlined,
  UserOutlined,
  ScheduleOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Carousel } from "antd";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

// Textos para transição
const texts = ["clínicas", "hospitais", "pacientes", "profissionais"];

// Class de transição de texto
export const Transition = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);

    //Tentar resetar valor quando chegar ao final do array
    // if (index === texts.length) {
    //   setIndex(0);
    // }
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "150%", paddingLeft: "1rem", paddingTop: "1rem" }}>
        Conectando &nbsp;{/* <= Código para manter espaço em branco*/}
        {/* Componente de transição de texto */}
        <TextTransition
          inline={true}
          springConfig={presets.wobbly}
          style={{
            color: "#5223AD",
          }}
        >
          {texts[index % texts.length]}
        </TextTransition>
      </h1>
    </div>
  );
};

// Class do Carrossel de informações
export const CarouselInformation: React.FC = () => {
  const InformationOne = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <TeamOutlined />
          <p>Gestão de Agenda e Profissionais</p>
        </div>
        <div>
          <DollarCircleOutlined />
          <p>Autoagendamento com Pagamento Online</p>
        </div>
        <div>
          <TeamOutlined />
          <p>Gestão de Agenda e Profissionais</p>
        </div>
      </div>
    );
  };

  const InformationTwo = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <DollarCircleOutlined />
          <p>Autoagendamento com Pagamento Online</p>
        </div>
        <div>
          <VideoCameraAddOutlined />
          <p>
            Telemedicina com <br /> Prontuário Integrado
          </p>
        </div>
        <div>
          <SolutionOutlined />
          <p>Visão dos pacientes internados</p>
        </div>
      </div>
    );
  };

  const InformationThree = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <FundProjectionScreenOutlined />
          <p>Lançamento de evoluções clínicas</p>
        </div>
        <div>
          <ReconciliationOutlined />
          <p>Histórico com o prontuário do paciente</p>
        </div>
        <div>
          <ExclamationCircleOutlined />
          <p>Informações sobre médicos e enfermeiros</p>
        </div>
      </div>
    );
  };

  const InformationFour = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <CreditCardOutlined />
          <p>Agendamento com Pagamento Online</p>
        </div>
        <div>
          <VideoCameraOutlined />
          <p>Teleconsulta com chat de texto</p>
        </div>
        <div>
          <UserOutlined />
          <p>Gestão de Pacientes com Histórico</p>
        </div>
      </div>
    );
  };

  const InformationFive = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <ScheduleOutlined />
          <p>Gestão de Agenda</p>
        </div>
        <div>
          <IdcardOutlined />
          <p>Informações pacientes</p>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      style={{
        width: "92vw",
        height: "9rem",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        fontSize: "small",
        backgroundImage: "linear-gradient(to right, #fc7fbd, #66d3e2)",
        borderRadius: "8px",
        boxShadow: "0px 8px 8px 0px #0004",
      }}
    >
      <InformationOne />
      <InformationTwo />
      <InformationThree />
      <InformationFour />
      <InformationFive />
    </Carousel>
  );
};

export const CarouselClients = () => {
  return (
    <Carousel
      autoplay
      style={{
        width: "90vw",
        height: "200px",
        display: "flex",
        alignItems: "center",
        animationDuration: "5000",
      }}
    >
      <img src="./imgs/unimed.svg" alt="" />
      <img src="./imgs/doctorgram.svg" alt="" />
      <img src="./imgs/animare.svg" alt="" />
      <img src="./imgs/holiste.svg" alt="" />
    </Carousel>
  );
};
