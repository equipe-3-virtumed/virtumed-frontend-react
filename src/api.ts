export const videoToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlYmYyMjk5Zi1lOTk4LTQ3NGUtYTk0NC05ODM5YmIwN2RjODgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NDg3NTA3OSwiZXhwIjoxNjc1NDc5ODc5fQ.F2HCRxJWpj2w94MYq_dSw29S1iMojjCblwh9POFkxcU";

export const CreateMeeting = async (id: string) => {
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
