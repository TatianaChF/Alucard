import { Request, Response } from 'express';

const express = require('express');
const router = express.Router();

router.get('/test', (req: Request, res: Response) => {
    res.json({
        message: "API connection established.",
        status: "success"
    })
        .status(200);
});

module.exports = router;