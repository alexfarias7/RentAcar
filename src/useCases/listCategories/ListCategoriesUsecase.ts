import { ICategoryRepositorie } from '../../interfaces/ICategoriesRepositories';
import { Category } from '../../modules/cars/models/CategoryModel';

class ListCategoriesUseCASE {
	constructor(private categoriesRepository: ICategoryRepositorie) {}

	execute(): Category[] {
		const categories = this.categoriesRepository.list();
		return categories;
	}
}

export { ListCategoriesUseCASE };
