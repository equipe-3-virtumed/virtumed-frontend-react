import {
  createContext,
  useContext,
  ReactNode,
} from "react";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketProviderData {

}

const SocketContext = createContext<SocketProviderData>({} as SocketProviderData);

export const SocketProvider = ({ children }: SocketProviderProps) => {

  return (
    <SocketContext.Provider value={{}}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);

