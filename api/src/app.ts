import express, { Request, Response } from "express";

const app = express();

app.set("port", 4000);

app.get("/ping", (_req: Request, res: Response) => {
    res.send({ message: "pong" });
});

export default app;
