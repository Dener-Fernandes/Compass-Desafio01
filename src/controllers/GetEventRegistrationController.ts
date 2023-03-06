import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "../models/repositories/EventRegistrationRepositoryInMemory";

class GetEventRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    const eventRegistration = await eventRegistrationRepositoryInMemory.getEventById(id);

    if (!eventRegistration) {
      return res.status(404).json( { event: eventRegistration });
    }

    return res.status(200).json({ event: eventRegistration });
  }
}

export { GetEventRegistrationController }