import React from "react";
import Header from "components/Header";
import ScheduleImg from "../../assets/agent.svg";
import ChatImg from "../../assets/chatImg.svg";
import ConsultationsImg from "../../assets/consultationsImg.svg";
import DoneConsultationsImg from "../../assets/doneConsultationsImg.svg";
import MyHealthImg from "../../assets/myHealthImg.svg";
import MyPlansImg from "../../assets/myPlansImg.svg";
import * as Styled from "./styles";

const ClinicPage = () => {
  return (
    <Styled.Container>
      <Header />

      <Styled.Content>
        <Styled.Infos>
          <Styled.ContainerInfo>
            <Styled.Picture
              src={ScheduleImg}
              alt="Foto para página de agendamentos on-line"
            />
            <Styled.upDiv>
              <p> Consultas Agendadas </p>
            </Styled.upDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={ChatImg}
              alt="Logo para página de chat on-line com o medico"
            />
              <Styled.upDiv>
              <p> Meus Pacientes </p>
            </Styled.upDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={ConsultationsImg}
              alt="Logo para consultas agendadas"
            />
             <Styled.middleDiv>
              <p> Calendário de Agendamento </p>
            </Styled.middleDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={DoneConsultationsImg}
              alt="Logo para consultas realizadas"
            />
            <Styled.middle2Div>
              <p> Minha Clínica </p>
            </Styled.middle2Div>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={MyHealthImg}
              alt="Logo para página sobre minha saúde"
            />
            <Styled.downDiv>
              <p> Meus Prontuários </p>
            </Styled.downDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={MyPlansImg}
              alt="Logo para página de meus planos de saúde"
            />
             <Styled.downDiv>
              <p> Meus Médicos </p>
            </Styled.downDiv>
          </Styled.ContainerInfo>
        </Styled.Infos>
      </Styled.Content>
    </Styled.Container>
  );
};

export default ClinicPage;
