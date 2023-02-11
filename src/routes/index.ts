import express, { Request, Response } from "express";

const routes = express.Router();

// Events
import { CreateEventRegistrationController } from "./../controllers/CreateEventRegistrationController";
import { DeleteEventRegistrationController } from "./../controllers/DeleteEventRegistrationController";
import { DeleteEventRegistrationByDayOfTheWeekController } from "../controllers/DeleteEventRegistrationByDayOfTheWeekController";
import { GetAllEventsRegistrationController } from "./../controllers/GetAllEventsRegistrationController";
import { GetEventRegistrationController } from "./../controllers/GetEventRegistrationController";
import { GetEventsRegistrationByDayOfTheWeekController } from "./../controllers/GetEventsRegistrationByDayOfTheWeekController";

// Users
import { SignInController } from "./../controllers/SignInController";
import { SignUpController } from "./../controllers/SignUpController";
import { validateCreateEventRegistrationRequest } from "./../validators/validateCreateEventRegistrationRequest";
import { validateId } from "./../validators/validateId";
import { validateSignInRequest } from "./../validators/validateSignInRequest";
import { validateSignUpRequest } from "./../validators/validateSignUpRequest";
import { validateDayOfTheWeek } from "./../validators/validateDayOfTheWeek";

// Events
const createEventRegistrationController = new CreateEventRegistrationController();
const getAllEventsRegistrationController = new GetAllEventsRegistrationController();
const getEventRegistrationController = new GetEventRegistrationController();
const deleteEventRegistrationController = new DeleteEventRegistrationController();
const deleteEventRegistrationByDayOfTheWeekController = new DeleteEventRegistrationByDayOfTheWeekController();
const getEventsRegistrationByDayOfTheWeekController = new GetEventsRegistrationByDayOfTheWeekController();

// Users
const signUpController = new SignUpController();
const signInController = new SignInController();

// Events
routes.post("/api/v1/events", validateCreateEventRegistrationRequest, createEventRegistrationController.handle);

routes.get("/api/v1/events", (req: Request, res: Response) => {
  req.query.dayOfTheWeek ? getEventsRegistrationByDayOfTheWeekController.handle(req, res)
  : getAllEventsRegistrationController.handle(req, res);
});
routes.get("/api/v1/events/:id", validateId, getEventRegistrationController.handle);

routes.delete("/api/v1/event/:id", validateId, deleteEventRegistrationController.handle);
routes.delete("/api/v1/events", validateDayOfTheWeek, deleteEventRegistrationByDayOfTheWeekController.handle);

// Users 
routes.post("/api/v1/users/signUp", validateSignUpRequest, signUpController.handle);
routes.post("/api/v1/users/signIn", validateSignInRequest, signInController.handle);

export { routes }