import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from  '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) =>{ 
    const appointments = appointmentsRepository.all();

    return response.json(appointments);
});

appointmentsRouter.post('/', (request, response)=>{
    try{
        const { provider, date } = request.body;

        const parsedDate = parseISO(date); // transformação de dados

        const createAppointment = new CreateAppointmentService( // passo o paramametro que ele recebe lá em services
        appointmentsRepository
        ); 

        const appointment = createAppointment.execute({date:parsedDate, provider});
    
        return response.json(appointment);
    }   catch (err){
        return response.status(400).json({error: err.message});
    }

}); 

export default appointmentsRouter;