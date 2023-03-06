import { HydratedDocument } from "mongoose";
import { ICreateEventRegistrationDTO } from "./../dtos/ICreateEventRegistrationDTO";
import { EventRegistration } from "./../entities/EventRegistration";
import { IEventRegistrationRepository } from "./IEventRegistrationRepository";

interface IEventRegistration extends ICreateEventRegistrationDTO {};

class EventRegistrationRepositoryInMemory implements IEventRegistrationRepository {
  private static INSTANCE: EventRegistrationRepositoryInMemory;

  static getInstance() {
    if (!EventRegistrationRepositoryInMemory.INSTANCE) {
      EventRegistrationRepositoryInMemory.INSTANCE = new EventRegistrationRepositoryInMemory();
    }

    return EventRegistrationRepositoryInMemory.INSTANCE;
  }

  async create({ description, dateTime }: ICreateEventRegistrationDTO): Promise<HydratedDocument<IEventRegistration>> {
    const event = await EventRegistration.create({ description, dateTime});

    return event;
  }

  async getEventById(id: string): Promise<HydratedDocument<IEventRegistration> | null> {
    const event = await EventRegistration.findById(id);

    return event;
  }

  async getEventsByWeekDay(dayOfTheWeek: number): Promise<HydratedDocument<IEventRegistration>[]> {
    const events = await EventRegistration.find();
    const eventsByWeekDay = events.filter((event) => {
      const date = new Date(event.dateTime);
      if (date.getDay() === dayOfTheWeek) {
        return event;
      }
    });

    return eventsByWeekDay;
  }

  async getAllEvents(): Promise<HydratedDocument<IEventRegistration>[]> {
    const events = await EventRegistration.find();

    return events;
  }

  async deleteById(id: string): Promise<void> {
    await EventRegistration.deleteOne({ _id: id });
    
    return;
  }

  async deleteFromWeekDay(dayOfTheWeek: number): Promise<void> {
    const events = await EventRegistration.find();
    events.filter(async (event: HydratedDocument<IEventRegistration>) => {
      const date = new Date(event.dateTime);
      if (date.getDay() === dayOfTheWeek) {
        await EventRegistration.deleteOne(event._id);
      }
    });
       
    return;
  }
}

export { EventRegistrationRepositoryInMemory }