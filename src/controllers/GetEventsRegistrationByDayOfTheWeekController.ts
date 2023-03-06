import { Request, Response } from "express";
import Joi, { ValidationError } from "joi";
import { AppError } from "../errors/AppError";
import { EventRegistrationRepositoryInMemory } from "../models/repositories/EventRegistrationRepositoryInMemory";

/* Due to how the route of this controller was implemented, it was necessary to validate the dayOfTheWeek here. */
const requestValidation = Joi.string().required();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class GetEventsRegistrationByDayOfTheWeekController {
  async handle(req: Request, res: Response) {
    let { dayOfTheWeek }  = req.query;
    let dayInNumber: number = 0;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    const errors = await requestValidation.validateAsync(dayOfTheWeek);

    if (errors) {
      throw new AppError("Invalid request", 400);
    }

    dayInNumber =  days.findIndex((day) => day == dayOfTheWeek);

    if (dayInNumber < 0) {
      throw new AppError("Day of the week is not valid", 400);
    }
  
    const events = await eventRegistrationRepositoryInMemory.getEventsByWeekDay(dayInNumber);

    if (events.length === 0) {
      return res.status(404). json({ message: "No events found" });
    }

    return res.status(200).json({ eventsByWeekDay: events });
  }
}

export { GetEventsRegistrationByDayOfTheWeekController }