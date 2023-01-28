export const videoToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlYmYyMjk5Zi1lOTk4LTQ3NGUtYTk0NC05ODM5YmIwN2RjODgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NDg4MTE5NiwiZXhwIjoxNjc0ODg4Mzk2fQ.m3Z-hsAbyUfaLRrdZF36r7IEbGcoSjMjaUnLHZP7c5M";

export const createMeeting = async (id: any) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${videoToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"region" : "sg001", "customRoomId" : `${id}`}),
  });

  const { roomId } = await res.json();
  return roomId;
};
