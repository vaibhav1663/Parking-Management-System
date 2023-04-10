import express from 'express';
import { updateStatus } from '../controller.js';

const router = express.Router();
router.patch('/:id', updateStatus);

export default router;