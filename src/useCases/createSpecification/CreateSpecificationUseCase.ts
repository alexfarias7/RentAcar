import { ISpecificatioRepository } from '../../interfaces/ISpecificationRepositoy';

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationUseCase {
	constructor(private specificationsRepository: ISpecificatioRepository) {}
	execute({ name, description }: IRequest): void {
		const specificationAlreadyExists =
			this.specificationsRepository.findByName(name);

		if (specificationAlreadyExists) {
			throw new Error('Specification  alredy exists');
		}

		this.specificationsRepository.create({
			name,
			description,
		});
	}
}

export { CreateSpecificationUseCase };
