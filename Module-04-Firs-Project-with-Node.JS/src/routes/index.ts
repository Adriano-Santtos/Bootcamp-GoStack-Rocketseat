import { Router } from 'express';
import appointmentsRouter from './appointments.routes'

const routes = Router();

routes.use('/appointments', appointmentsRouter); // o .use funciona para qualquer tipo de rota. Aqui ta jogando as coisas para appointme


export default routes;
