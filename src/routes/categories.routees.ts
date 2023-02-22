import { Router } from 'express';

import { createCategoryController } from '../useCases/createCategory';
import { listCategoriesControllers } from '../useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
	return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
	return listCategoriesControllers.handle(req, res);
});

export { categoriesRoutes };
