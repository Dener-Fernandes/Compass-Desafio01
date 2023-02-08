import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

class CreateEventRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { description, dateTime, createdAt } = req.body;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    try {
      const event = await eventRegistrationRepositoryInMemory.create({description, dateTime, createdAt});

      return res.status(201).json({ event });
    } catch (error) {
      return res.status(400).json({ message: "Could not create an event. Please, try later" });
    }
  }
}

export { CreateEventRegistrationController }