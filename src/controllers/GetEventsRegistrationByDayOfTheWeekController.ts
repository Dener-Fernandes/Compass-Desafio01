import { Request, Response } from "express";
import Joi, { ValidationError } from "joi";
import { EventRegistrationRepositoryInMemory } from "./../models/repositories/EventRegistrationRepositoryInMemory";

/* Due to how the route of this controller was implemented, it was necessary to validate the dayOfTheWeek here. */
const requestValidation = Joi.string().required();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class GetEventsRegistrationByDayOfTheWeekController {
  async handle(req: Request, res: Response) {
    let { dayOfTheWeek }  = req.query;
    let dayInNumber: number = 0;
    const eventRegistrationRepositoryInMemory = EventRegistrationRepositoryInMemory.getInstance();

    try {
      await requestValidation.validateAsync(dayOfTheWeek);
  
      dayInNumber =  days.findIndex((day) => day == dayOfTheWeek);
  
      if (dayInNumber < 0) {
        return res.status(400).json({ message: "Day of the week is not valid"});
      }
  
    } catch (error) {
      const errorsValidation = error as ValidationError;
      
      return res.status(400).json({ message: errorsValidation.message});
    }
  
    try {
      const events = await eventRegistrationRepositoryInMemory.getEventsByWeekDay(dayInNumber);

      if (events.length === 0) {
        return res.status(404).json({ message: "No events found"});
      }

      return res.status(200).json({ eventsByWeekDay: events });
    } catch (error) {
      return res.status(500).json({ message: "Could not get events. Please, try later" }); 
    }
  }
}

export { GetEventsRegistrationByDayOfTheWeekController }