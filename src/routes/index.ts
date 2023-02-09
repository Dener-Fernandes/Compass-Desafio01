import express, { Request, Response } from "express";
import { CreateEventRegistrationController } from "../controllers/CreateEventRegistrationController";
import { DeleteEventRegistrationController } from "../controllers/DeleteEventRegistrationController";
import { DeleteEventRegistrationFromWeekDayController } from "../controllers/DeleteEventRegistrationFromWeekDayController";
import { GetAllEventsRegistrationController } from "../controllers/GetAllEventsRegistrationController";
import { GetEventRegistrationController } from "../controllers/GetEventRegistrationController";
import { GetEventsRegistrationByWeekDayController } from "../controllers/GetEventsRegistrationByWeekDayController";

const routes = express.Router();

// Events
const createEventRegistrationController = new CreateEventRegistrationController();
const getAllEventsRegistrationController = new GetAllEventsRegistrationController();
const getEventRegistrationController = new GetEventRegistrationController();
const deleteEventRegistrationController = new DeleteEventRegistrationController();
const deleteEventRegistrationFromWeekDayController = new DeleteEventRegistrationFromWeekDayController();
const getEventsRegistrationByWeekDayController = new GetEventsRegistrationByWeekDayController();


// Events
routes.post("/api/v1/events", createEventRegistrationController.handle);

routes.get("/api/v1/events", (req: Request, res: Response) => {
  req.query.dayOfTheWeek ? getEventsRegistrationByWeekDayController.handle(req, res)
  : getAllEventsRegistrationController.handle(req, res);
});
routes.get("/api/v1/events/:id", getEventRegistrationController.handle);

routes.delete("/api/v1/event/:id", deleteEventRegistrationController.handle);
routes.delete("/api/v1/events", deleteEventRegistrationFromWeekDayController.handle);

export { routes }