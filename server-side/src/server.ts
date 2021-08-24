import * as express from "express";
import { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 8081;

app.get("/", (_req: Request, res: Response) => {
  res.send({
    message: "Hi Ton",
  });
});

app.listen(port, () => {
  console.log("server listening on port 8081");
});
