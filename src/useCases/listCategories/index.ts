import { CategoriesRepository } from '../../modules/cars/repositories/CategoryRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCASE } from './ListCategoriesUsecase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCASE(categoriesRepository);
const listCategoriesControllers = new ListCategoriesController(
	listCategoriesUseCase
);

export { listCategoriesControllers };
