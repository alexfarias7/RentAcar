import { Specification } from '../modules/cars/entities/Specification';

interface ICreateSpecificationDTO {
	name: string;
	description: string;
}

interface ISpecificatioRepository {
	create({ description, name }: ICreateSpecificationDTO): void;
	findByName(name: string): Specification;
}

export { ISpecificatioRepository, ICreateSpecificationDTO };
