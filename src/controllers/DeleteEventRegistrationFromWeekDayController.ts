import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

class DeleteEventRegistrationFromWeekDayController {
  async handle(req: Request, res: Response): Promise<Response> {
    let { dayOfTheWeek } = req.query;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (!dayOfTheWeek) {
      return res.status(400).json({ message: "Invalid request" });
    }

    dayOfTheWeek = String(dayOfTheWeek);
    
    try {
      let dayOfTheWeekInNumber = days.findIndex((day) => day === dayOfTheWeek);
      await eventRegistrationRepositoryInMemory.deleteFromWeekDay(dayOfTheWeekInNumber);

      return res.status(200).json({ message: "Event deleted by Day" });
    } catch (error) {
      return res.status(400).json({ message: "Could not delete event. Please, try later" });
    }

  }
}

export { DeleteEventRegistrationFromWeekDayController }