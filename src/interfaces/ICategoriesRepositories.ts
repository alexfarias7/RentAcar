import { Category } from '../modules/cars/entities/Category';

interface ICreateCategoryDto {
	name: string;
	description: string;
}

interface ICategoryRepositorie {
	findByName(name: string): Promise<Category>;
	list(): Promise<Category[]>;
	create({ name, description }: ICreateCategoryDto): Promise<void>;
}

export { ICategoryRepositorie, ICreateCategoryDto };
