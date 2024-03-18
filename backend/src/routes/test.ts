import express, { Request, Response } from "express";

export const router = express.Router();

router.get('/test', (req: Request, res: Response) => {
    res.json({
        message: "API connection established.",
        status: "success"
    })
        .status(200);
});