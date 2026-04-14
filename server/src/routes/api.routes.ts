import { Router } from 'express';

import * as businessController from '../controllers/business.controller';
import * as appointmentController from '../controllers/appointment.controller';

const router = Router();

router.post('/business', businessController.createBusiness);

router.get('/availability', appointmentController.getAvailableSlots);

export default router;