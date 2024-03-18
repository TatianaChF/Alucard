import { Request, Response } from 'express';

interface Error {
    status?: number;
    message: string
}

require('dotenv').config();
const cors = require('cors');
const express = require('express');

const port = process.env.PORT;

const testRoutes = require("#routes/test");

const errorHandler = (error: Error, req: Request, res: Response, next: any) => {
    const status = error.status || 422;
    res.status(status).send(error.message);
}

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', testRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});