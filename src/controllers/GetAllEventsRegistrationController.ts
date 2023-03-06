import { Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { EventRegistrationRepositoryInMemory } from "../models/repositories/EventRegistrationRepositoryInMemory";

class GetAllEventsRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();
    const events = await eventRegistrationRepositoryInMemory.getAllEvents();

    if (events.length === 0) {
      throw new AppError("No events found", 404);
    }

    return res.status(200).json(events);
  }
}

export { GetAllEventsRegistrationController }