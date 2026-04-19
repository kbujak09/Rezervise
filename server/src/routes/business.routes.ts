import { Router } from 'express';

import * as businessController from '../controllers/business.controller';

const businessRouter = Router();

businessRouter.post('/', businessController.createBusiness);

businessRouter.get('/', businessController.getAllBusinesses);

businessRouter.get('/:businessId', businessController.getBusinessById);

export default businessRouter;