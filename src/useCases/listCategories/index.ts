import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoryRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCASE } from './ListCategoriesUsecase';

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCASE(categoriesRepository);
const listCategoriesControllers = new ListCategoriesController(
	listCategoriesUseCase
);

export { listCategoriesControllers };
