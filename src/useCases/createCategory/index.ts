import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoryRepository';
import { CreateCategoryController } from './createCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export default (): CreateCategoryController => {
	const categoriesRepository = new CategoriesRepository();

	const createdCategoryUseCase = new CreateCategoryUseCase(
		categoriesRepository
	);

	const createCategoryController = new CreateCategoryController(
		createdCategoryUseCase
	);

	return createCategoryController;
};
