import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoryRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}

	execute({ name, description }: IRequest): void {
		const categoryAlreadyExists = this.categoriesRepository.findByName(name);

		if (categoryAlreadyExists) {
			throw new Error('Category all exists!');
		}

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryUseCase };
