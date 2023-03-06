import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import "express-async-errors";

import { eventRoutes } from "./routes/events.routes";
import { userRoutes } from "./routes/user.routes";
import { AppError } from "./errors/AppError";
import { ValidationError } from "joi";

require('dotenv').config();

const app = express();

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

// Error handling
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ValidationError) {
    return res.status(400).json({ message: error.message });
  }
  
  // if (error.name === "MongoServerError") {
  //   return res.status(400).json({ message: error.message });
  // }

  console.log(error);
  
  return res.status(500).json({
    message: "Internal server error. Please try again later",
  });
});

export { app };