import Header from "components/Header";
import ScheduleImg from "../../assets/agent.svg";
import ChatImg from "../../assets/chatImg.svg";
import ConsultationsImg from "../../assets/consultationsImg.svg";
import DoneConsultationsImg from "../../assets/doneConsultationsImg.svg";
import MyHealthImg from "../../assets/myHealthImg.svg";
import MyPlansImg from "../../assets/myPlansImg.svg";
import * as Styled from "./styles";

const PatientPage = () => {
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
            <Styled.UpDiv>
              <p> Agendamento onlide </p>
            </Styled.UpDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={ChatImg}
              alt="Logo para página de chat on-line com o medico"
            />
              <Styled.UpDiv>
              <p> Atendimento Rápido </p>
            </Styled.UpDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={ConsultationsImg}
              alt="Logo para consultas agendadas"
            />
             <Styled.MiddleDiv>
              <p> Consultas Agendadas </p>
            </Styled.MiddleDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={DoneConsultationsImg}
              alt="Logo para consultas realizadas"
            />
            <Styled.Middle2Div>
              <p> Consultas Realizadas </p>
            </Styled.Middle2Div>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={MyHealthImg}
              alt="Logo para página sobre minha saúde"
            />
            <Styled.DownDiv>
              <p> Minha Saúde </p>
            </Styled.DownDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={MyPlansImg}
              alt="Logo para página de meus planos de saúde"
            />
             <Styled.DownDiv>
              <p> Meus Planos </p>
            </Styled.DownDiv>
          </Styled.ContainerInfo>
        </Styled.Infos>
      </Styled.Content>
    </Styled.Container>
  );
};

export default PatientPage;
