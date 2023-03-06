import { Request, Response, NextFunction } from "express";
import Joi, { ValidationError } from "joi";
import { AppError } from "./../errors/AppError";

const requestValidation = Joi.object({
  description: Joi.string().required().messages({ "string.required": "Description is required" }),
  dateTime: Joi.date().required().messages({ "date.base": "Date time must be a valid date" }),
});

async function validateCreateEventRegistrationRequest(req: Request, res: Response, next: NextFunction): Promise<void | Response> { 
  
  await requestValidation.validateAsync(req.body);

  return next();
}

export { validateCreateEventRegistrationRequest }
