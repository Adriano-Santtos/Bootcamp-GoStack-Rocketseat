import { Router } from 'express';
import appointmentsRouter from './appointments.routes'
import usersRouter from './users.routes'

const routes = Router();

routes.use('/appointments', appointmentsRouter); // o .use funciona para qualquer tipo de rota. Aqui ta jogando as coisas para appointme
routes.use('/users', usersRouter); // o .use funciona para

export default routes;

