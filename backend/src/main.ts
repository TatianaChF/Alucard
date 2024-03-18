import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./routes/test.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/", router);

const errorHandler = (error: any, req: any, res: any, next: any) => {
    const status = error.status || 422;
    res.status(status).send(error.message);
}

app.use(express.json());
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});

/* const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

const cleanup = () => {
    server.close(() => {
        console.log("shutting down");
    });
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup); */