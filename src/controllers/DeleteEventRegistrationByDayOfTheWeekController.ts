import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

class DeleteEventRegistrationByDayOfTheWeekController {
  async handle(req: Request, res: Response): Promise<Response> {
    let dayOfTheWeek: number  = Number(req.query.dayOfTheWeek);
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    try {
      await eventRegistrationRepositoryInMemory.deleteFromWeekDay(dayOfTheWeek);

      return res.status(200).json({ message: "Event deleted by Day" });
    } catch (error) {
      return res.status(500).json({ message: "Could not delete event. Please, try later" });
    }

  }
}

export { DeleteEventRegistrationByDayOfTheWeekController }