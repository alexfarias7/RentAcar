import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRouter = Router();
const specificationRepository = new SpecificationRepository();

specificationsRouter.post('/', (req, res) => {
	const { name, description } = req.body;
	const createSpecificatioService = new CreateSpecificationService(
		specificationRepository
	);
	createSpecificatioService.execute({ name, description });

	return res.status(201).send();
});

export { specificationsRouter };
