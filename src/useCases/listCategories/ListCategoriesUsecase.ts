import { ICategoryRepositorie } from '../../interfaces/ICategoriesRepositories';
import { Category } from '../../modules/cars/entities/Category';

class ListCategoriesUseCASE {
	constructor(private categoriesRepository: ICategoryRepositorie) {}

	execute(): Category[] {
		const categories = this.categoriesRepository.list();
		return categories;
	}
}

export { ListCategoriesUseCASE };
