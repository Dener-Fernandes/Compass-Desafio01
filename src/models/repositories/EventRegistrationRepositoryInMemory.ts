import { ICreateEventRegistrationDTO } from "../dtos/ICreateEventRegistrationDTO";
import { EventRegistration } from "../entities/EventRegistration";
import { IEventRegistrationRepository } from "./IEventRegistrationRepository";

class EventRegistrationRepositoryInMemory implements IEventRegistrationRepository {

  private static INSTANCE: EventRegistrationRepositoryInMemory;
  private events: EventRegistration[] = [];

  static getInstance() {
    if (!EventRegistrationRepositoryInMemory.INSTANCE) {
      EventRegistrationRepositoryInMemory.INSTANCE = new EventRegistrationRepositoryInMemory();
    }

    return EventRegistrationRepositoryInMemory.INSTANCE;
  }

  async create({ description, dateTime, createdAt }: ICreateEventRegistrationDTO): Promise<EventRegistration> {
    const event = new EventRegistration(description, dateTime, createdAt);
    await this.events.push(event);

    return event;
  }

  async findById(id: string): Promise<EventRegistration | undefined> {
    return await this.events.find((event) => event.id === id);
  }

  async getEvent(): Promise<EventRegistration> {
    throw new Error("Method not implemented.");
  }

  async getEvents(): Promise<EventRegistration[]> {
    return this.events;
  }

  async deleteById(id: string): Promise<EventRegistration> {
    const eventIndex = this.events.findIndex((event) => event.id === id);
    const [ eventRegistration ] = await this.events.splice(eventIndex, 1);

    return eventRegistration;
  }

  async deleteFromWeekDay(dayOfTheWeek: number): Promise<EventRegistration> {
    const eventIndex = this.events.findIndex((event) => {
      const date = new Date(event.dateTime);
      return date.getDay() === dayOfTheWeek;
    });

    const [ eventRegistration ] = await this.events.splice(eventIndex, 1);
    
    return eventRegistration;
  }
}

export { EventRegistrationRepositoryInMemory }