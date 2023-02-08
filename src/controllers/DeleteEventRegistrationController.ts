import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

class DeleteEventRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    try {
      const event = await eventRegistrationRepositoryInMemory.deleteById(id);
      
      return res.status(200).json({ deletedEvent: event });
    } catch(error) {
      return res.status(400).json({ message: "Could not delete the event. Please, try later" });
    }
  }
}

export { DeleteEventRegistrationController }