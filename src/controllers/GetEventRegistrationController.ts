import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "../models/repositories/EventRegistrationRepositoryInMemory";

class GetEventRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    try {
      const event = await eventRegistrationRepositoryInMemory.getEventById(id);

      return res.status(200).json({event: event});
    } catch (error) {
      return res.status(500).json({ message: "Could not get event. Please, try later" });
    }
  }
}

export { GetEventRegistrationController }