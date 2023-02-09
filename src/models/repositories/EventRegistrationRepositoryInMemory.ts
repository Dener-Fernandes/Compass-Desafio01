import { ICreateEventRegistrationDTO } from "./../dtos/ICreateEventRegistrationDTO";
import { EventRegistration } from "./../entities/EventRegistration";
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

  async getEventById(id: string): Promise<EventRegistration | undefined> {
    return await this.events.find((event) => event.id === id);
  }

  async getEventsByWeekDay(dayOfTheWeek: number): Promise<EventRegistration[]> {
    const eventsByWeekDay = await this.events.filter((event) => {
      const date = new Date(event.dateTime);
      if (date.getDay() === dayOfTheWeek) {
        return event;
      }
    });

    return eventsByWeekDay;
  }

  async getAllEvents(): Promise<EventRegistration[]> {
    return this.events;
  }

  async deleteById(id: string): Promise<void> {
    const eventIndex = this.events.findIndex((event) => event.id === id);
    await this.events.splice(eventIndex, 1);
    
    return;
  }

  async deleteFromWeekDay(dayOfTheWeek: number): Promise<void> {
    const newEvents: EventRegistration[] = await this.events.filter((event) => {
      const date = new Date(event.dateTime);
      if (date.getDay() != dayOfTheWeek) {
        return event;
      } 
    });

    this.events = newEvents;
    
    return;
  }
}

export { EventRegistrationRepositoryInMemory }