import { useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  const serverUrl = "http://localhost:8081";
  const socket = io(serverUrl);
  const [msg, setMsg] = useState<string>("");

  const onSendClicked = () => {
    socket.emit("sendMessage", msg);
  };

  socket.on("sendMessage", (arg) => {
    console.log(arg);
  });

  return (
    <div>
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <input type="button" value="send" onClick={onSendClicked} />
    </div>
  );
};

export default App;
