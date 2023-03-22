import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../database';
import {
	ICategoryRepositorie,
	ICreateCategoryDto,
} from '../../../../interfaces/ICategoriesRepositories';
import { Category } from '../../entities/Category';

class CategoriesRepository implements ICategoryRepositorie {
	private repository: Repository<Category>;

	constructor() {
		this.repository = AppDataSource.getRepository(Category);
	}

	async create({ name, description }: ICreateCategoryDto): Promise<void> {
		const category = this.repository.create({
			description,
			name,
		});

		await this.repository.save(category);
	}

	async list(): Promise<Category[]> {
		const categories = await this.repository.find();
		return categories;
	}

	async findByName(name: string): Promise<Category> {
		const category = await this.repository.findOne({ where: { name } });
		return category;
	}
}

export { CategoriesRepository };
