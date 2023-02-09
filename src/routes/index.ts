import express, { Request, Response } from "express";

const routes = express.Router();

// Events
import { CreateEventRegistrationController } from "../controllers/CreateEventRegistrationController";
import { DeleteEventRegistrationController } from "../controllers/DeleteEventRegistrationController";
import { DeleteEventRegistrationFromWeekDayController } from "../controllers/DeleteEventRegistrationFromWeekDayController";
import { GetAllEventsRegistrationController } from "../controllers/GetAllEventsRegistrationController";
import { GetEventRegistrationController } from "../controllers/GetEventRegistrationController";
import { GetEventsRegistrationByWeekDayController } from "../controllers/GetEventsRegistrationByWeekDayController";

// Users
import { SignInController } from "../controllers/SignInController";
import { SignUpController } from "../controllers/SignUpController";

// Events
const createEventRegistrationController = new CreateEventRegistrationController();
const getAllEventsRegistrationController = new GetAllEventsRegistrationController();
const getEventRegistrationController = new GetEventRegistrationController();
const deleteEventRegistrationController = new DeleteEventRegistrationController();
const deleteEventRegistrationFromWeekDayController = new DeleteEventRegistrationFromWeekDayController();
const getEventsRegistrationByWeekDayController = new GetEventsRegistrationByWeekDayController();

// Users
const signUpController = new SignUpController();
const signInController = new SignInController();

// Events
routes.post("/api/v1/events", createEventRegistrationController.handle);

routes.get("/api/v1/events", (req: Request, res: Response) => {
  req.query.dayOfTheWeek ? getEventsRegistrationByWeekDayController.handle(req, res)
  : getAllEventsRegistrationController.handle(req, res);
});
routes.get("/api/v1/events/:id", getEventRegistrationController.handle);

routes.delete("/api/v1/event/:id", deleteEventRegistrationController.handle);
routes.delete("/api/v1/events", deleteEventRegistrationFromWeekDayController.handle);

// Users 
routes.post("/api/v1/users/signUp", signUpController.handle);
routes.post("/api/v1/users/signIn", signInController.handle);

export { routes }