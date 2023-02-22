import { Request, Response } from 'express';

import { ListCategoriesUseCASE } from './ListCategoriesUsecase';

class ListCategoriesController {
	constructor(private listCategoriesUseCase: ListCategoriesUseCASE) {}

	handle(req: Request, res: Response): Response {
		const all = this.listCategoriesUseCase.execute();
		return res.json({ all });
	}
}

export { ListCategoriesController };
