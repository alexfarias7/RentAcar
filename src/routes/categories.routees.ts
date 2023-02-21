import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../models/CategoryModel";
import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
	const { name, description } = req.body;

	const categoryAlreadyExists = categoriesRepository.findByName(name);

	if (categoryAlreadyExists) {
		return res.status(400).json({ error: "Category all exists!" });
	}

	categoriesRepository.create({ name, description });
	return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
	const allCategories = categoriesRepository.list();
	return res.json({ allCategories });
});

export { categoriesRoutes };
