import { FC } from "react";
import { io } from "socket.io-client";
import SocketContext, { SocketContextType } from "../contexts/socketContext";

const withSocket = <TProps,>(Component: FC<TProps>) => {
  const serverUrl = "http://localhost:8081";
  const contextValue: SocketContextType = { socket: io(serverUrl) };
  const wrapped: FC<TProps> = (props) => {
    return (
      <SocketContext.Provider value={contextValue}>
        <Component {...props} />
      </SocketContext.Provider>
    );
  };
  wrapped.displayName = `withSocket${Component.displayName || "Component"}`;
  return wrapped;
};

export default withSocket;
