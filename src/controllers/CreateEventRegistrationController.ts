import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";
import { ICreateEventRegistrationDTO as IRequest } from "./../models/dtos/ICreateEventRegistrationDTO";

class CreateEventRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const requestValues: IRequest = req.body;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    const event = await eventRegistrationRepositoryInMemory.create(requestValues);

    return res.status(201).json({ event });
  }
}

export { CreateEventRegistrationController }