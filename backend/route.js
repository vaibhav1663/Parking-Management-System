import express from 'express';
import { getSensData } from './controller.js';

const router = express.Router();

router.get('/', getSensData);
export default router;