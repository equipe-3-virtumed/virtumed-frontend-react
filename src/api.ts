export const videoToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiZWYwMjdlZi02YzU5LTQ5NGUtYjUyMS0wYzk1OGY1NGNkNmUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NDg4MjU3MiwiZXhwIjoxNjc3NDc0NTcyfQ.EUuhHZB62Li4R3pWKhRNIr1-qZgYwxtCn2zAj9BkElk";

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
