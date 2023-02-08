import express from "express";
import { CreateEventRegistrationController } from "../controllers/CreateEventRegistrationController";
import { GetAllEventsRegistrationController } from "../controllers/GetAllEventsRegistrationController";
import { GetEventRegistrationController } from "../controllers/GetEventRegistrationController";

const createEventRegistrationController = new CreateEventRegistrationController();
const getAllEventsRegistrationController = new GetAllEventsRegistrationController();
const getEventRegistrationController = new GetEventRegistrationController();


const eventsRoutes = express.Router();

eventsRoutes.post("/", createEventRegistrationController.handle);
eventsRoutes.get("/", getAllEventsRegistrationController.handle);
eventsRoutes.get("/:id", getEventRegistrationController.handle);

export { eventsRoutes }