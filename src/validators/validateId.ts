import { Request, Response, NextFunction } from "express";
import Joi, { ValidationError } from "joi";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

const requestValidation = Joi.string()
.regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
.required()


async function validateId(req: Request, res: Response, next: NextFunction) {
  const id: string  = req.params.id;
  const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

  try {
    await requestValidation.validateAsync(id);
    const eventRegistration = await eventRegistrationRepositoryInMemory.getEventById(id);
    
    if (!eventRegistration) {
      return res.status(404).json({message: "Event not found"});
    }

    return next();
  } catch (error) {
    const errorsValidation = error as ValidationError;

    return res.status(400).json({ message: errorsValidation.message });     
  }
}

export { validateId }