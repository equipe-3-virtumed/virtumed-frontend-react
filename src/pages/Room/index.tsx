import {
  MdVideocam,
  MdVideocamOff,
  MdMic,
  MdMicOff,
  MdClose,
} from "react-icons/md";
import Logo from "../../assets/logo.svg";
import * as Styled from "./styled";

import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Video, { LocalParticipant, RemoteParticipant } from "twilio-video";

import Participant from "../../components/participant";
import { useRoom } from "../../hooks/useRoom";
import { useVideo } from "../../hooks/useVideo";
import { useAudio } from "../../hooks/useAudio";
import { useParams } from "react-router";
import { useAuth } from "contexts/auth";

const calculateVideoCardSize = (participants: RemoteParticipant[]) => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const calculateByParticipant = (quantity: number) =>
    screenWidth / quantity - 20;
  const totalParticipants = participants.length + 1;
  const cardWidth =
    totalParticipants > 3
      ? calculateByParticipant(3)
      : calculateByParticipant(totalParticipants);

  return {
    width: screenWidth > 880 ? `${cardWidth}px` : `90%`,
    height: `${screenWidth > 880 ? cardWidth - 130 : screenHeight / 2}px`,
  };
};

export const Room = () => {
  const { roomId } = useParams();
  const { logged } = useAuth();

  const navigate = useNavigate();
  // const [doctor, setDoctor] = useState("");
  // const [patient, setPatient] = useState("");

  const routeData = {
    doctor: "Wirlley",
    patient: "Marcos",
  };
  // const routeData = useLocation<{ username: string; roomName: string }>().state;
  const [participants, setParticipants] = useState<Video.RemoteParticipant[]>(
    []
  );
  const [localParticipant, setLocalParticipant] = useState<LocalParticipant>();
  const { connect, disconnect } = useRoom({
    doctorName: routeData?.doctor,
    patientName: routeData?.patient,
    roomId: roomId,
  });
  const { isCameraOn, toggleVideo } = useVideo();
  const { isMicOn, toggleAudio } = useAudio();

  const videoCard = calculateVideoCardSize(participants);

  const renderRemoteParticipants = useCallback(
    () =>
      participants.map((participant: Video.RemoteParticipant) => (
        <Participant
          width={videoCard.width}
          height={videoCard.height}
          key={participant.sid}
          participant={participant}
        />
      )),
    [participants]
  );

  const participantConnected = (participant: Video.RemoteParticipant) => {
    setParticipants((prevParticipants) => [...prevParticipants, participant]);
  };

  const participantDisconnected = (participant: Video.RemoteParticipant) => {
    setParticipants((prevParticipants: Video.RemoteParticipant[]) =>
      prevParticipants.filter((p: Video.RemoteParticipant) => p !== participant)
    );
  };

  // interface DisableType {
  //   room: Video.Room
  //   type: string
  // }

  const disableTrackOnInit = (
    room: Video.Room,
    type: "videoTracks" | "audioTracks"
  ) => {
    // const { track } = Array.from[room.localParticipant[type].values()][0];
    const { track }: any = Array.from([room.localParticipant[type].values()])[0];
    // track.stop();
    // track.disable();
  };

  const handleOnCloseClick = () => {
    disconnect();
    navigate("/");
  };

  useEffect(() => {
    connect().then((roomResponse) => {
      roomResponse.on("participantDisconnected", participantDisconnected);
      roomResponse.on("participantConnected", participantConnected);
      roomResponse.participants.forEach(participantConnected);
      setLocalParticipant(roomResponse.localParticipant);
      disableTrackOnInit(roomResponse, "videoTracks");
      disableTrackOnInit(roomResponse, "audioTracks");
    });

    return () => {
      disconnect();
    };
  }, [logged]);

  return (
    <Styled.Container>
      <Styled.Img src={Logo} alt="Logo Virtumed" />
      <Styled.VideoContainer>
        {localParticipant && (
          <Participant
            width={videoCard.width}
            height={participants.length > 0 ? videoCard.height : "auto"}
            isLocal
            participant={localParticipant}
          />
        )}
        {renderRemoteParticipants()}
      </Styled.VideoContainer>
      <Styled.IconContainer>
        <Styled.IconButton
          IsActive={isMicOn}
          onClick={() => toggleAudio({ localParticipant })}
        >
          {isMicOn ? <MdMic /> : <MdMicOff />}
        </Styled.IconButton>
        <Styled.IconButton IsActive onClick={handleOnCloseClick}>
          <MdClose />
        </Styled.IconButton>

        <Styled.IconButton
          IsActive={isCameraOn}
          onClick={() => toggleVideo({ localParticipant })}
        >
          {isCameraOn ? <MdVideocam /> : <MdVideocamOff />}
        </Styled.IconButton>
      </Styled.IconContainer>
      <Styled.ChatContainer>Doctor: {routeData.doctor}</Styled.ChatContainer>
    </Styled.Container>
  );
};

