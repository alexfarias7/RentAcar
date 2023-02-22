import Express from 'express';

import { categoriesRoutes } from './routes/categories.routees';
import { specificationsRouter } from './routes/specifications.routes';

const app = Express();
const port = 3333;

app.use(Express.json());

app.use('/categories', categoriesRoutes);
app.use('/specification', specificationsRouter);

app.listen(port, () => console.log('server is runnig'));
