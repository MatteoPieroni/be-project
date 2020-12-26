import express from 'express';

import { envVar } from '../config';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: `Welcome to Express API template. Your ENV var is ${envVar}` }));

export default indexRouter;
