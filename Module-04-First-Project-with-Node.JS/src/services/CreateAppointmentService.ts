import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request { // nome irrelevante, ainda é um DTO
    provider: string;
    date: Date;
}

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;
    
    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    } // para usar uma depencia externa, eu uso como variável do constructor


    public execute({date, provider}: Request): Appointment{
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
            appointmentDate,
        );
    
        if(findAppointmentInSameDate) {
            throw Error('This appointment is already booked');
        }
    
        const appointment = this.appointmentsRepository
        .create({provider, date: appointmentDate});
        

        return appointment;
    }
}
 
export default CreateAppointmentService
