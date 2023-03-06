import { ICreateEventRegistrationDTO } from "./../dtos/ICreateEventRegistrationDTO";
import { HydratedDocument } from 'mongoose';

interface IEventRegistration extends ICreateEventRegistrationDTO {};

interface IEventRegistrationRepository {
  create(EventRegistration: ICreateEventRegistrationDTO): Promise<HydratedDocument<IEventRegistration>>;
  getEventById(id: string): Promise<HydratedDocument<IEventRegistration> | null>;
  getEventsByWeekDay(dayOfTheWeek: number): Promise<HydratedDocument<IEventRegistration>[]>;  
  getAllEvents(): Promise<HydratedDocument<IEventRegistration>[]>;  
  deleteById(id: string): Promise<void>;
  // deleteFromWeekDay(dayOfTheWeek: number): Promise<void>;
}

export { IEventRegistrationRepository }