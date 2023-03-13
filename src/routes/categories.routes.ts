import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../useCases/createCategory';
import { importCategoryController } from '../useCases/importCategory';
import { listCategoriesControllers } from '../useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
	dest: './tmp',
});

categoriesRoutes.post('/', (req, res) => {
	console.log('relotd ta funcionando caralho');

	return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
	return listCategoriesControllers.handle(req, res);
});

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
	return importCategoryController.handle(req, res);
});

export { categoriesRoutes };
