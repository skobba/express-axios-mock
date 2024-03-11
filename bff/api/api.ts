import {Router} from 'express';
import {blueRouter} from './blue';
import {greenRouter} from './green';

const api = Router();

api.use(blueRouter);
api.use(greenRouter);

export {api};