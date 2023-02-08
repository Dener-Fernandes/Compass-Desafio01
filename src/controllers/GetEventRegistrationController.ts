import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "../models/repositories/EventRegistrationRepositoryInMemory";


class GetEventRegistrationController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    try {
      const event = await eventRegistrationRepositoryInMemory.getEventById(id);

      return res.status(200).json(event);

    } catch (error) {
      return res.status(400).json({ message: "Could not get the event. Please, try later" });
    }
  }

}

export { GetEventRegistrationController }