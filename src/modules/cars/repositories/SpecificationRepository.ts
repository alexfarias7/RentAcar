import {
	ICreateSpecificationDTO,
	ISpecificatioRepository,
} from '../../../interfaces/ISpecificationRepositoy';
import { Specification } from '../models/SpecificationModel';

class SpecificationRepository implements ISpecificatioRepository {
	private specifications: Specification[];

	constructor() {
		this.specifications = [];
	}

	create({ description, name }: ICreateSpecificationDTO): void {
		const specification = new Specification();

		Object.assign(specification, {
			name,
			description,
			created_at: new Date(),
		});

		this.specifications.push(specification);
	}
	findByName(name: string): Specification {
		const specification = this.specifications.find(
			(specicication) => specicication.name === name
		);
		return specification;
	}
}

export { SpecificationRepository };
