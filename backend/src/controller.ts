import express, { Request, Response } from "express";

export const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const remoteRes = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await remoteRes.json();

    res.contentType("application/json").send(json);
});