import Express from 'express';

import { router } from './routes';

const app = Express();
const port = 3333;

app.use(Express.json());
app.use(router);

app.listen(port, () => console.log('server is runnig'));
