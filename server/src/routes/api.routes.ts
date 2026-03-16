import { Router } from 'express';

import { createBusiness } from '../controllers/business.controller';

const router = Router();

router.get('/business', createBusiness);

export default router;