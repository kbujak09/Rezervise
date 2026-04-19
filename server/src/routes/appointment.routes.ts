import { Router } from 'express';

import * as appointmentController from '../controllers/appointment.controller';

const appointmentRouter = Router();

appointmentRouter.post('/', appointmentController.createAppointment);

export default appointmentRouter;