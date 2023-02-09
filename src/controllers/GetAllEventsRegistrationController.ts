import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "../models/repositories/EventRegistrationRepositoryInMemory";

class GetAllEventsRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    try {
      const events = await eventRegistrationRepositoryInMemory.getAllEvents();

      return res.status(200).json(events);
    } catch (error) {
      return res.status(500).json({ message: "Could not get events. Please, try later" });
    }
  }
}

export { GetAllEventsRegistrationController }