import { ReactNode } from "react";
import { StreamSourceProvider } from "./StreamSource";
import { SocketProvider } from "./Sockets";


interface ProviderProp {
  children: ReactNode;
}

const RoomProviders = ({ children }: ProviderProp) => {
  return (
    <StreamSourceProvider>
      <SocketProvider>
        {children}
      </SocketProvider>
    </StreamSourceProvider>
  );
};

export default RoomProviders;
