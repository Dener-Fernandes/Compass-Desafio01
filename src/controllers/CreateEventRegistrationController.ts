import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

interface IRequest {
  description: string;
  dateTime: string;
  createdAt: string;
}

class CreateEventRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const requestValues: IRequest = req.body;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    try {
      const event = await eventRegistrationRepositoryInMemory.create(requestValues);

      return res.status(201).json({ event });
    } catch (error) {
      return res.status(500).json({ message: "Could not create event. Please, try later" });
    }
  }
}

export { CreateEventRegistrationController }