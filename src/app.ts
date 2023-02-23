import express from "express";
import mongoose from "mongoose";

import { eventRoutes } from "./routes/events.routes";
import { userRoutes } from "./routes/user.routes";

require('dotenv').config()

const app = express();

console.log(process.env.DATABASE);

// Mongo connection
const databaseURLConnection = process.env.DATABASE!.replace("<PASSWORD>", process.env.DATABASE_PASSWORD!);

mongoose.set("strictQuery", false);

mongoose.connect(databaseURLConnection).then((connection) => {
  console.log("Databse connected");
});

app.use(express.json());

// Routes
app.use("/api/v1/events", eventRoutes);
app.use("/api/v1/users", userRoutes);

export { app };