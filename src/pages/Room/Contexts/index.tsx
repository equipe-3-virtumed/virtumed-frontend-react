import { ReactNode } from "react";
import { StreamSourceProvider } from "./StreamSource";
import { SocketProvider } from "./Sockets";
import { RoomProvider } from "./roomContext";


interface ProviderProp {
  children: ReactNode;
}

const RoomProviders = ({ children }: ProviderProp) => {
  return (
    <RoomProvider>
      <StreamSourceProvider>
        <SocketProvider>
          {children}
        </SocketProvider>
      </StreamSourceProvider>
    </RoomProvider>
  );
};

export default RoomProviders;
