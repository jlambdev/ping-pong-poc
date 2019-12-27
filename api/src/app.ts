import express, { Request, Response } from "express";

const app = express();

app.set("port", 4000);

app.get("/ping", (_req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.send({ message: "pong" });
});

export default app;
