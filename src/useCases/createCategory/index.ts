import { CategoriesRepository } from '../../modules/cars/repositories/CategoryRepository';
import { CreateCategoryController } from './createCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();

const createdCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
	createdCategoryUseCase
);

export { createCategoryController, createdCategoryUseCase };
