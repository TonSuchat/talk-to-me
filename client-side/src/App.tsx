import { useState, useContext, useEffect } from "react";
import SocketContext, { SocketContextType } from "./contexts/socketContext";
import withSocket from "./utils/withSocket";

const App = () => {
  const { socket } = useContext<SocketContextType>(SocketContext);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    socket.on("sendMessage", (arg) => {
      console.log(arg);
    });
  }, [socket]);

  const onSendClicked = () => {
    socket.emit("sendMessage", msg);
  };

  return (
    <div>
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <input type="button" value="send" onClick={onSendClicked} />
    </div>
  );
};

export default withSocket(App);
