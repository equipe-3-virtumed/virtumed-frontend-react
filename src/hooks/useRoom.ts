import { useCallback, useState } from "react";
import Video, { Room } from "twilio-video";
import { useNavigate } from "react-router";
import api from "../services/api";

interface Params {
  doctorName: string;
  patientName: string;
  roomId?: string;
}

export const useRoom = ({ doctorName, patientName, roomId }: Params) => {
  const navigate = useNavigate();
  const [room, setRoom] = useState<Room | null>(null);

  if (!doctorName && !patientName) {
    navigate("/");
  }

  const connect = useCallback(async () => {
    const response = await api.get(`room/connect/${roomId}`);

    console.log("🚀 ~ file: useRoom.ts:23 ~ connect ~ response", response)
    const roomResponse = await Video.connect(response.data.patientVideoToken, {
      name: roomId,
      video: true,
      audio: true,
    });

    setRoom(roomResponse);

    // disableMicAndCanOnInit(roomResponse);
    return roomResponse;
  }, []);

  const disconnect = () => {
    setRoom((currentRoom) => {
      if (currentRoom && currentRoom.localParticipant.state === "connected") {
        currentRoom.localParticipant.videoTracks.forEach((trackPublication) => {
          trackPublication.track.stop();
          trackPublication.unpublish();
        });
        currentRoom.localParticipant.audioTracks.forEach((trackPublication) => {
          trackPublication.track.stop();
          trackPublication.unpublish();
        });
        currentRoom?.disconnect();

        return null;
      }

      return null;
    });
  };

  return { room, connect, disconnect };
};