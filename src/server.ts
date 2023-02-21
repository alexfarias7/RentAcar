import Express from "express";
import { categoriesRoutes } from "./routes/categories.routees";

const app = Express();
const port = 3333;

app.use(Express.json());

app.use("/categories", categoriesRoutes);

app.get("/", (req, res) => {
	return res.json({ msg: "deu cert!" });
});

app.listen(port, () => console.log("server is runnig"));
