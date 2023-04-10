import express from 'express';
import { getSensData, updateStatus } from '../controller.js';

const router = express.Router();

router.get('/', getSensData);
export default router;