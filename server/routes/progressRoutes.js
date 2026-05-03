import { Router } from 'express';
import { getProgress, updateProgress } from '../controllers/progressController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', protect, getProgress);
router.put('/', protect, updateProgress);

export default router;
