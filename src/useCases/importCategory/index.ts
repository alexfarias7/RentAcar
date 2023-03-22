import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoryRepository';
import { ImportCategoryControoler } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUsecase';

const categoriesRepository = null;

const importCategoryUsecase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryControoler(
	importCategoryUsecase
);

export { importCategoryController };
