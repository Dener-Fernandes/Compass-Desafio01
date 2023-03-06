import { Request, Response, NextFunction } from "express";
import Joi, { ValidationError } from "joi";
import { AppError } from "../errors/AppError";
import { EventRegistrationRepositoryInMemory } from "../models/repositories/EventRegistrationRepositoryInMemory";

const requestValidation = Joi.string().required();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

async function validateDayOfTheWeek(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { dayOfTheWeek } = req.query;
  const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();
  
  const errors = await requestValidation.validateAsync(dayOfTheWeek);

  if (errors) {
    throw new AppError("Invalid request", 400);
  }

  const dayInNumber =  days.findIndex((day) => day == dayOfTheWeek);

  if (dayInNumber < 0) {
    throw new AppError("Day of the week is not valid", 400);
  }

  req.query.dayOfTheWeek = dayInNumber as any;

  return next();
}

export { validateDayOfTheWeek }