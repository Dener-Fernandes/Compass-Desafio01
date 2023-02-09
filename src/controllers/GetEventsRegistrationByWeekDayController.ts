import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

class GetEventsRegistrationByWeekDayController {
  async handle(req: Request, res: Response) {
    let { dayOfTheWeek }  = req.query;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    try {
      let dayOfTheWeekInNumber = days.findIndex((day) => day === dayOfTheWeek);
      const events = await eventRegistrationRepositoryInMemory.getEventsByWeekDay(dayOfTheWeekInNumber);

      return res.status(200).json({ eventsByWeekDay: events });
    } catch (error) {
      return res.status(500).json({ message: "Could not get events. Please, try later" }); 
    }
  }
}

export { GetEventsRegistrationByWeekDayController }