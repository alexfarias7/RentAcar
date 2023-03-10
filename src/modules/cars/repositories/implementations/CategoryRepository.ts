import {
	ICategoryRepositorie,
	ICreateCategoryDto,
} from '../../../../interfaces/ICategoriesRepositories';
import { Category } from '../../models/CategoryModel';

class CategoriesRepository implements ICategoryRepositorie {
	private categories: Category[];

	private static INSTANCE: CategoriesRepository;

	private constructor() {
		this.categories = [];
	}

	public static getInstance(): CategoriesRepository {
		if (!CategoriesRepository.INSTANCE) {
			CategoriesRepository.INSTANCE = new CategoriesRepository();
		}
		return CategoriesRepository.INSTANCE;
	}

	create({ name, description }: ICreateCategoryDto): void {
		const category: Category = new Category();

		Object.assign(category, {
			name,
			description,
			created_at: new Date(),
		});

		this.categories.push(category);
	}

	list(): Category[] {
		return this.categories;
	}

	findByName(name: string): Category {
		const category = this.categories.find((category) => category.name === name);
		return category;
	}
}

export { CategoriesRepository };
