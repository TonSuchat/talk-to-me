import { createContext } from "react";
import { Socket } from "socket.io-client";

export type SocketContextType = {
  socket: Socket | null;
};

const SocketContext = createContext<SocketContextType>({ socket: null });

export default SocketContext;
