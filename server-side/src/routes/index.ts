import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.send({ response: "Hi" }).status(200);
});

export default router;
