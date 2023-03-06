import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { AppError } from "../errors/AppError";

async function validateId(req: Request, res: Response, next: NextFunction) {
  const id: string  = req.params.id;

  if (!mongoose.isValidObjectId(id)) {
    throw new AppError("Invalid id", 400);
  }

  return next();
}

export { validateId }