import { Router } from 'express';

import { createCategoryController } from '../useCases/createCategory';

const specificationsRouter = Router();

specificationsRouter.post('/', (req, res) => {
	return createCategoryController.handle(req, res);
});

export { specificationsRouter };
