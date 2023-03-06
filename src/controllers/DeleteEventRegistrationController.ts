import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "../models/repositories/EventRegistrationRepositoryInMemory";

class DeleteEventRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    let { id } = req.params;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    await eventRegistrationRepositoryInMemory.deleteById(id);
      
    return res.status(200).json({ message: "Event deleted by Id" });
  }
}

export { DeleteEventRegistrationController }