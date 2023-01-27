export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlYmYyMjk5Zi1lOTk4LTQ3NGUtYTk0NC05ODM5YmIwN2RjODgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NDc4NjMzOSwiZXhwIjoxNjc0NzkzNTM5fQ.dn9cq16iGhKI8kcAxQCgJYvL_5JF9Ehog-ul-V61npU";

  interface CreateMeetingProps {
  token: string;
}

export const CreateMeeting = async ({ token }: CreateMeetingProps) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
