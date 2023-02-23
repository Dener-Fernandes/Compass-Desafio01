import express, { Request, Response } from "express";

const eventRoutes = express.Router();

import { validateCreateEventRegistrationRequest } from "./../validators/validateCreateEventRegistrationRequest";
import { validateId } from "./../validators/validateId";
import { validateDayOfTheWeek } from "./../validators/validateDayOfTheWeek";

import { CreateEventRegistrationController } from "./../controllers/CreateEventRegistrationController";
import { DeleteEventRegistrationController } from "./../controllers/DeleteEventRegistrationController";
import { DeleteEventRegistrationByDayOfTheWeekController } from "../controllers/DeleteEventRegistrationByDayOfTheWeekController";
import { GetAllEventsRegistrationController } from "./../controllers/GetAllEventsRegistrationController";
import { GetEventRegistrationController } from "./../controllers/GetEventRegistrationController";
import { GetEventsRegistrationByDayOfTheWeekController } from "./../controllers/GetEventsRegistrationByDayOfTheWeekController";

const createEventRegistrationController = new CreateEventRegistrationController();
const getAllEventsRegistrationController = new GetAllEventsRegistrationController();
const getEventRegistrationController = new GetEventRegistrationController();
const deleteEventRegistrationController = new DeleteEventRegistrationController();
const deleteEventRegistrationByDayOfTheWeekController = new DeleteEventRegistrationByDayOfTheWeekController();
const getEventsRegistrationByDayOfTheWeekController = new GetEventsRegistrationByDayOfTheWeekController();

// Events
eventRoutes.post("/", validateCreateEventRegistrationRequest, createEventRegistrationController.handle);

eventRoutes.get("/", (req: Request, res: Response) => {
  req.query.dayOfTheWeek ? getEventsRegistrationByDayOfTheWeekController.handle(req, res)
  : getAllEventsRegistrationController.handle(req, res);
});
eventRoutes.get("/:id", validateId, getEventRegistrationController.handle);
eventRoutes.delete("/event/:id", validateId, deleteEventRegistrationController.handle);
eventRoutes.delete("/", validateDayOfTheWeek, deleteEventRegistrationByDayOfTheWeekController.handle);

export { eventRoutes }