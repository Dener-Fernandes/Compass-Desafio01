import { ICreateEventRegistrationDTO } from "./../dtos/ICreateEventRegistrationDTO";
import { EventRegistration } from "./../entities/EventRegistration";


interface IEventRegistrationRepository {
  create(EventRegistration: ICreateEventRegistrationDTO): Promise<EventRegistration>;
  getEventById(id: string): Promise<EventRegistration | undefined>
  getEventsByWeekDay(dayOfTheWeek: number): Promise<EventRegistration[]>  
  getAllEvents(): Promise<EventRegistration[]>  
  deleteById(id: string): Promise<void>;
  deleteFromWeekDay(dayOfTheWeek: number): Promise<void>;
}

export { IEventRegistrationRepository }