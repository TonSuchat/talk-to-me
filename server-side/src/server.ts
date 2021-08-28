import * as express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import indexRoute from "./routes";

const port = process.env.PORT || 8081;
const app = express();
app.use(indexRoute);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("a user connected");

  socket.on("sendMessage", (arg) => {
    console.log(arg);
    socket.emit("sendMessage", arg);
  });
});

httpServer.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
