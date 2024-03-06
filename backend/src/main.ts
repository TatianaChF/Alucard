import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./controller.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/", router);

const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

const cleanup = () => {
    server.close(() => {
        console.log("shutting down");
    });
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);