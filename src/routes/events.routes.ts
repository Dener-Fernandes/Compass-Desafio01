import express, { Request, Response } from "express";
import { CreateEventRegistrationController } from "../controllers/CreateEventRegistrationController";
import { DeleteEventRegistrationController } from "../controllers/DeleteEventRegistrationController";
import { DeleteEventRegistrationFromWeekDayController } from "../controllers/DeleteEventRegistrationFromWeekDayController";
import { GetAllEventsRegistrationController } from "../controllers/GetAllEventsRegistrationController";
import { GetEventRegistrationController } from "../controllers/GetEventRegistrationController";
import { GetEventsRegistrationByWeekDayController } from "../controllers/GetEventsRegistrationByWeekDayController";

const createEventRegistrationController = new CreateEventRegistrationController();
const getAllEventsRegistrationController = new GetAllEventsRegistrationController();
const getEventRegistrationController = new GetEventRegistrationController();
const deleteEventRegistrationController = new DeleteEventRegistrationController();
const deleteEventRegistrationFromWeekDayController = new DeleteEventRegistrationFromWeekDayController();
const getEventsRegistrationByWeekDayController = new GetEventsRegistrationByWeekDayController();

const eventsRoutes = express.Router();

eventsRoutes.post("/", createEventRegistrationController.handle);

eventsRoutes.get("/", (req: Request, res: Response) => {
  req.query.dayOfTheWeek ? getEventsRegistrationByWeekDayController.handle(req, res)
  : getAllEventsRegistrationController.handle(req, res);
});
eventsRoutes.get("/:id", getEventRegistrationController.handle);

eventsRoutes.delete("/event/:id", deleteEventRegistrationController.handle);
eventsRoutes.delete("/events/", deleteEventRegistrationFromWeekDayController.handle);

export { eventsRoutes }