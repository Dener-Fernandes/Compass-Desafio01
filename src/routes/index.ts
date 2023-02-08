import { Router } from "express";
import { eventsRoutes } from "./events.routes";

const router = Router();

router.use("/api/v1/events", eventsRoutes);

export { router };