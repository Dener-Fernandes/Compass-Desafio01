import { ICreateEventRegistrationDTO } from "../dtos/ICreateEventRegistrationDTO";
import { EventRegistration } from "../entities/EventRegistration";


interface IEventRegistrationRepository {
  create(EventRegistration: ICreateEventRegistrationDTO): Promise<EventRegistration>;
  findById(id: string): Promise<EventRegistration | undefined>;
  getEvent(): Promise<EventRegistration>  
  getEvents(): Promise<EventRegistration[] | undefined>  
  deleteById(id: string): Promise<EventRegistration>;
  deleteFromWeekDay(dayOfTheWeek: number): Promise<EventRegistration>;
}

export { IEventRegistrationRepository }