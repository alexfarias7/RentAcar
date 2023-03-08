import Express from 'express';
import swaggwerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

const app = Express();
const port = 3333;

app.use(Express.json());
app.use('/api-docs', swaggwerUi.serve, swaggwerUi.setup(swaggerFile));
app.use(router);

app.listen(port, () => console.log('server is runnig'));
