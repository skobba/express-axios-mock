import {Router} from 'express';
import {blueRouter} from '../routers/blue';
import {greenRouter} from '../routers/green';

const api = Router();

api.use(blueRouter);
api.use(greenRouter);

export {api};