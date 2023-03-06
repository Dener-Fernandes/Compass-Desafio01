import { Request, Response } from "express";
import { UserRepositoryInMemory } from "./../models/repositories/UserRepositoryInMemory";
import { ISignUpDTO as IRequest } from "../models/dtos/ISignUpDTO";
import { AppError } from "../errors/AppError";

class SignUpController {
  async handle(req: Request, res: Response) {
    const requestValues: IRequest = req.body;
    const userRepositoryInMemory = UserRepositoryInMemory.getInstance();

    const userAlreadyExists = await userRepositoryInMemory.findUserByEmail(requestValues.email);

    if (userAlreadyExists) {
      throw new AppError("User already exists", 401);
    }

    const user = await userRepositoryInMemory.signUp(requestValues);
    
    return res.status(201).json({ user: user });
  }
}

export { SignUpController }