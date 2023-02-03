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
import { useDesign } from "contexts/themeContext";
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
      <h1 style={{ fontSize: "150%", paddingLeft: "1rem", paddingTop: "5rem" }}>
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
  const { lightTheme } = useDesign();

  // 1º componente de informações
  const InformationOne = () => {
    return (
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: lightTheme ? "#000" : "#fff",
        }}
      >
        <div
          style={{
            width: "95%",
            display: "flex",
            flexWrap: "wrap",
            paddingBottom: "16px",
          }}
        >
          <DollarCircleOutlined
            style={{ width: "33.3%", fontSize: "1.8rem" }}
          />
          <TeamOutlined style={{ width: "33.3%", fontSize: "1.8rem" }} />
          <TeamOutlined style={{ width: "33.3%", fontSize: "1.8rem" }} />
        </div>
        <div style={{ width: "95%", display: "flex" }}>
          <p style={{ width: "33.3%", padding: "0" }}>
            Autoagendamento com Pagamento Online
          </p>
          <p style={{ width: "33.3%", padding: "0" }}>
            Gestão de Agenda e Profissionais
          </p>
          <p style={{ width: "33.3%", padding: "0" }}>
            Acompanhamento Personalizado
          </p>
        </div>
      </div>
    );
  };

  // 2º componente de informações
  const InformationTwo = () => {
    return (
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: lightTheme ? "#000" : "#fff",
        }}
      >
        <div
          style={{
            width: "95%",
            display: "flex",
            flexWrap: "wrap",
            paddingBottom: "16px",
          }}
        >
          <DollarCircleOutlined
            style={{ width: "33.3%", fontSize: "1.8rem" }}
          />
          <VideoCameraAddOutlined
            style={{ width: "33.3%", fontSize: "1.8rem" }}
          />
          <SolutionOutlined style={{ width: "33.3%", fontSize: "1.8rem" }} />
        </div>
        <div style={{ width: "95%", display: "flex" }}>
          <p style={{ width: "33.3%", padding: "0" }}>
            Autoagendamento com Pagamento Online
          </p>
          <p style={{ width: "33.3%", padding: "0" }}>
            Telemedicina com Prontuário Integrado
          </p>
          <p style={{ width: "33.3%", padding: "0" }}>
            Visão dos pacientes internados
          </p>
        </div>
      </div>
    );
  };

  // 3º componente de informações
  const InformationThree = () => {
    return (
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: lightTheme ? "#000" : "#fff",
        }}
      >
        <div
          style={{
            width: "95%",
            display: "flex",
            flexWrap: "wrap",
            paddingBottom: "16px",
          }}
        >
          <FundProjectionScreenOutlined
            style={{ width: "33.3%", fontSize: "1.8rem" }}
          />
          <ReconciliationOutlined
            style={{ width: "33.3%", fontSize: "1.8rem" }}
          />
          <ExclamationCircleOutlined
            style={{ width: "33.3%", fontSize: "1.8rem" }}
          />
        </div>
        <div style={{ width: "95%", display: "flex" }}>
          <p style={{ width: "33.3%", padding: "0" }}>
            Lançamento de evoluções clínicas
          </p>
          <p style={{ width: "33.3%", padding: "0" }}>
            Histórico com o prontuário do paciente
          </p>
          <p style={{ width: "33.3%", padding: "0" }}>
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
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: lightTheme ? "#000" : "#fff",
        }}
      >
        <div
          style={{
            width: "95%",
            display: "flex",
            flexWrap: "wrap",
            paddingBottom: "16px",
          }}
        >
          <CreditCardOutlined style={{ width: "33.3%", fontSize: "1.8rem" }} />
          <VideoCameraOutlined style={{ width: "33.3%", fontSize: "1.8rem" }} />
          <UserOutlined style={{ width: "33.3%", fontSize: "1.8rem" }} />
        </div>
        <div style={{ width: "95%", display: "flex" }}>
          <p style={{ width: "33.3%", padding: "0" }}>
            Agendamento com Pagamento Online
          </p>
          <p style={{ width: "33.3%", padding: "0" }}>
            Teleconsulta com chat de texto
          </p>
          <p style={{ width: "33.3%", padding: "0" }}>
            Gestão de Pacientes com Histórico
          </p>
        </div>
      </div>
    );
  };

  // 5º componente de informações
  const InformationFive = () => {
    return (
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: lightTheme ? "#000" : "#fff",
        }}
      >
        <div
          style={{
            width: "95%",
            display: "flex",
            flexWrap: "wrap",
            paddingBottom: "16px",
          }}
        >
          <ScheduleOutlined style={{ width: "50%", fontSize: "1.8rem" }} />
          <IdcardOutlined style={{ width: "50%", fontSize: "1.8rem" }} />
        </div>
        <div
          style={{
            width: "95%",
            display: "flex",
          }}
        >
          <p style={{ width: "50%", padding: "0" }}>Gestão de Agenda</p>
          <p style={{ width: "50%", padding: "0" }}>Informações pacientes</p>
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
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "14px",
        backgroundImage: lightTheme
          ? "linear-gradient(to right, #66d2e2, #e54197)"
          : "linear-gradient(to right, #303030, #5223AD)",
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
