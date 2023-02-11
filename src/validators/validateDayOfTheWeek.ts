import { Request, Response, NextFunction } from "express";
import Joi, { ValidationError } from "joi";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

const requestValidation = Joi.string().required();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

async function validateDayOfTheWeek(req: Request, res: Response, next: NextFunction) {
  const { dayOfTheWeek } = req.query;
  const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();
  
  try {
    await requestValidation.validateAsync(dayOfTheWeek);

    const dayInNumber =  days.findIndex((day) => day == dayOfTheWeek);

    if (dayInNumber < 0) {
      return res.status(400).json({ message: "Day of the week is not valid"});
    }

    const events = await eventRegistrationRepositoryInMemory.getEventsByWeekDay(dayInNumber);

    if (events.length == 0) {
      return res.status(404).json({ message: "No events found" });
    }

    req.query.dayOfTheWeek = dayInNumber as any;

    return next();
  } catch (error) {
    const errorsValidation = error as ValidationError;
    
    return res.status(400).json({ message: errorsValidation.message});
  }
}

export { validateDayOfTheWeek }