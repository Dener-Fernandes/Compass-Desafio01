import { ICreateEventRegistrationDTO } from "../../dtos/ICreateEventRegistrationDTO";
import { EventRegistration } from "../entities/EventRegistration";
import { IEventRegistrationRepository } from "./IEventRegistrationRepository";

class EventRegistrationRepositoryInMemory implements IEventRegistrationRepository {
  private static INSTANCE: EventRegistrationRepositoryInMemory;
  private event: EventRegistration[] = [];

  static getInstance() {
    if (!EventRegistrationRepositoryInMemory.INSTANCE) {
      EventRegistrationRepositoryInMemory.INSTANCE = new EventRegistrationRepositoryInMemory();
    }

    return EventRegistrationRepositoryInMemory.INSTANCE;
  }

  async create({ description, dateTime, createdAt }: ICreateEventRegistrationDTO): Promise<EventRegistration> {
    const event = new EventRegistration(description, dateTime, createdAt);
    await this.event.push(event);

    return event;
  }
  async deleteById(id: string): Promise<EventRegistration> {
    const eventIndex = this.event.findIndex((event) => event.id === id);
    const [ event ] = await this.event.splice(eventIndex, 1);

    return event;

  }
  deleteFromWeekDay(dayOfTheWeek: number): Promise<EventRegistration> {
    throw new Error("Method not implemented.");
  }
  
}

export { EventRegistrationRepositoryInMemory }