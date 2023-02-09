import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

class CreateEventRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { description, dateTime, createdAt } = req.body;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    if (!description || !dateTime || !createdAt) { 
      return res.status(400).json({ message: "Missing required fields" });      
    }


    try {
      const event = await eventRegistrationRepositoryInMemory.create({description, dateTime, createdAt});

      return res.status(201).json({ event });
    } catch (error) {
      return res.status(400).json({ message: "Could not create event. Please, try later" });
    }
  }
}

export { CreateEventRegistrationController }