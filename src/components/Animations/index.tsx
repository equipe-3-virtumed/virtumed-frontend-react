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

// Componente de transição de textos
export const TransitionText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "150%", paddingLeft: "1rem", paddingTop: "7rem" }}>
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

// Componente do Carrossel de informações
export const CarouselInformation: React.FC = () => {
  // 1º componente de informações
  const InformationOne = () => {
    return (
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            width: "22rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "16px 44px",
          }}
        >
          <TeamOutlined style={{ fontSize: "1.5rem" }} />
          <DollarCircleOutlined style={{ fontSize: "1.5rem" }} />
          <TeamOutlined style={{ fontSize: "1.5rem" }} />
        </div>
        <div style={{ width: "21rem", display: "flex", }}>
          <p style={{ padding: "0" }}>Gestão de Agenda e Profissionais</p>
          <p style={{ padding: "0" }}>Autoagendamento com Pagamento Online</p>
          <p style={{ padding: "0" }}>Acompanhamento Personalizado</p>
        </div>
      </div>
    );
  };

  // 2º componente de informações
  const InformationTwo = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // flexDirection: "column"
        }}
      >
        <div style={{ width: "7rem", margin: "1rem" }}>
          <DollarCircleOutlined style={{ fontSize: "1.5rem", marginLeft: "2rem"  }} />
          <p style={{ padding: "0rem" }}>Autoagendamento com Pagamento Online</p>
        </div>
        <div style={{ width: "7rem", margin: "1rem" }}>
          <VideoCameraAddOutlined style={{ fontSize: "1.5rem", marginLeft: "2rem"  }} />
          <p style={{ padding: "0rem" }}>
            Telemedicina com Prontuário Integrado
          </p>
        </div>
        <div style={{ width: "7rem", margin: "1rem"}}>
          <SolutionOutlined style={{ fontSize: "1.5rem", marginLeft: "2rem"  }} />
          <p style={{ padding: "0rem" }}>Visão dos pacientes internados</p>
        </div>
      </div>
    );
  };

  // 3º componente de informações
  const InformationThree = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // flexDirection: "column"
        }
      }
      >
        <div style={{ width: "7rem", margin: "1rem" }}>
          <FundProjectionScreenOutlined style={{ fontSize: "1.5rem", marginLeft: "2rem"  }} />
          <p style={{ padding: "0rem" }}>Lançamento de evoluções clínicas</p>
        </div>
        <div style={{ width: "7rem", margin: "1rem" }}>
          <ReconciliationOutlined style={{ fontSize: "1.5rem", marginLeft: "2rem"  }} />
          <p style={{ padding: "0rem" }}>Histórico com o prontuário do paciente</p>
        </div>
        <div style={{ width: "7rem", margin: "1rem" }}>
          <ExclamationCircleOutlined style={{ fontSize: "1.5rem", marginLeft: "2rem"  }} />
          <p style={{ padding: "0rem" }}>
            Informações sobre médicos e enfermeiros
          </p>
        </div>
      </div>
    );
  };

  // 4º componente de informações
  const InformationFour = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // flexDirection: "column"
        }}
      >
        <div style={{ width: "7rem", margin: "1rem" }}>
          <CreditCardOutlined style={{ fontSize: "1.5rem", marginLeft: "2rem"  }} />
          <p style={{ padding: "0" }}>Agendamento com Pagamento Online</p>
        </div>
        <div style={{ width: "7rem", margin: "1rem" }}>
          <VideoCameraOutlined style={{ fontSize: "1.5rem", marginLeft: "2rem"  }} />
          <p style={{ padding: "0" }}>Teleconsulta com chat de texto</p>
        </div>
        <div style={{ width: "7rem", margin: "1rem" }}>
          <UserOutlined style={{ fontSize: "1.5rem", marginLeft: "2rem" }} />
          <p style={{ padding: "0" }}>Gestão de Pacientes com Histórico</p>
        </div>
      </div>
    );
  };

  // 5º componente de informações
  const InformationFive = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "21rem", margin: "2rem"}}>
          <ScheduleOutlined style={{ fontSize: "1.5rem" }} />
          <p style={{ padding: "0" }}>Gestão de Agenda</p>
        </div>
        <div style={{ width: "21rem", margin: "2rem"}}>
          <IdcardOutlined style={{ fontSize: "1.5rem" }} />
          <p style={{ padding: "0" }}>Informações pacientes</p>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      style={{
        width: "93vw",
        height: "9rem",
        display: "flex",
        alignItems: "first baseline",
        // justifyContent: "center",
        // display: "flex",
        // alignItems: "center",
        // textAlign: "center",
        fontSize: "14px",
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

// Componente de carrossel de clientes
export const CarouselClients = () => {
  return (
    <Carousel
      autoplay
      style={{
        width: "80vw",
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
