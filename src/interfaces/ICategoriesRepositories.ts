import { Category } from '../modules/cars/models/CategoryModel';

interface ICreateCategoryDto {
	name: string;
	description: string;
}

interface ICategoryRepositorie {
	findByName(name: string): Category;
	list(): Category[];
	create({ name, description }: ICreateCategoryDto): void;
}

export { ICategoryRepositorie, ICreateCategoryDto };
