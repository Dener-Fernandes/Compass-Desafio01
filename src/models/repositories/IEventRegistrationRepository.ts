import { ICreateEventRegistrationDTO } from "./../dtos/ICreateEventRegistrationDTO";
import { EventRegistration } from "./../entities/EventRegistration";


interface IEventRegistrationRepository {
  create(EventRegistration: ICreateEventRegistrationDTO): Promise<EventRegistration>;
  getEventById(id: string): Promise<EventRegistration | undefined>  
  getAllEvents(): Promise<EventRegistration[]>  
  deleteById(id: string): Promise<EventRegistration>;
  deleteFromWeekDay(dayOfTheWeek: number): Promise<EventRegistration>;
}

export { IEventRegistrationRepository }