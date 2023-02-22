import { Specification } from '../modules/cars/models/SpecificationModel';

interface ICreateSpecificationDTO {
	name: string;
	description: string;
}

interface ISpecificatioRepository {
	create({ description, name }: ICreateSpecificationDTO): void;
	findByName(name: string): Specification;
}

export { ISpecificatioRepository, ICreateSpecificationDTO };
