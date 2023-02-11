import { Request, Response, NextFunction } from "express";
import Joi, { ValidationError } from "joi";

const requestValidation = Joi.object({
  description: Joi.string().required(),
  dateTime: Joi.string().regex(/^[A-Z0-9:.-]*$/).required(),
  createdAt: Joi.string().regex(/^[A-Z0-9:.-]*$/).required()
});

async function validateCreateEventRegistrationRequest(req: Request, res: Response, next: NextFunction) { 
  try {
    await requestValidation.validateAsync(req.body);
    
    return next();
  } catch (error) {
    const errorsValidation = error as ValidationError

    return res.status(400).json({ message: errorsValidation.message });
  }
}

export { validateCreateEventRegistrationRequest }
