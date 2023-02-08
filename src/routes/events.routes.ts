import express from "express";
import { CreateEventRegistrationController } from "../controllers/CreateEventRegistrationController";

const createEventRegistrationController = new CreateEventRegistrationController();

const eventsRoutes = express.Router();

eventsRoutes.post("/", createEventRegistrationController.handle);
eventsRoutes.post("/:id", createEventRegistrationController.handle);

export { eventsRoutes }