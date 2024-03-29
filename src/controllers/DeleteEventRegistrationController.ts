import { Request, Response } from "express";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

class DeleteEventRegistrationController {
  async handle(req: Request, res: Response): Promise<Response> {
    let { id } = req.params;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    try {
      await eventRegistrationRepositoryInMemory.deleteById(id);
      
      return res.status(200).json({ message: "Event deleted by Id" });
    } catch(error) {
      return res.status(500).json({ message: "Could not delete event. Please, try later" });
    }
  }
}

export { DeleteEventRegistrationController }