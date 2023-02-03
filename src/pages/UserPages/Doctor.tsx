import Header from "components/Header";
import ScheduleImg from "../../assets/agent.svg";
import ChatImg from "../../assets/chatImg.svg";
import ConsultationsImg from "../../assets/consultationsImg.svg";
import DoneConsultationsImg from "../../assets/doneConsultationsImg.svg";
import MyHealthImg from "../../assets/myHealthImg.svg";
import MyPlansImg from "../../assets/myPlansImg.svg";
import * as Styled from "./styles";

const DoctorPage = () => {
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
              <p> Consultas Agendadas </p>
            </Styled.UpDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={ChatImg}
              alt="Logo para página de chat on-line com o medico"
            />
              <Styled.UpDiv>
              <p> Meus Pacientes </p>
            </Styled.UpDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={ConsultationsImg}
              alt="Logo para consultas agendadas"
            />
             <Styled.MiddleDiv>
              <p> Meu Calendário </p>
            </Styled.MiddleDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={DoneConsultationsImg}
              alt="Logo para consultas realizadas"
            />
            <Styled.Middle2Div>
              <p> Minha Clínica </p>
            </Styled.Middle2Div>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={MyHealthImg}
              alt="Logo para página sobre minha saúde"
            />
            <Styled.DownDiv>
              <p> Meus Prontuários </p>
            </Styled.DownDiv>
          </Styled.ContainerInfo>

          <Styled.ContainerInfo>
            <Styled.Picture
              src={MyPlansImg}
              alt="Logo para página de meus planos de saúde"
            />
             <Styled.DownDiv>
              <p> Farmácia </p>
            </Styled.DownDiv>
          </Styled.ContainerInfo>
        </Styled.Infos>
      </Styled.Content>
    </Styled.Container>
  );
};

export default DoctorPage;
