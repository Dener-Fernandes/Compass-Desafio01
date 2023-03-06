import { Request, Response } from "express";
import { AppError } from "./../errors/AppError";
import { UserRepositoryInMemory } from "./../models/repositories/UserRepositoryInMemory";

interface IRequest {
  email: string;
  password: string;
}

class SignInController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password }: IRequest = req.body;
    const userRepositoryInMemory = UserRepositoryInMemory.getInstance();

    const user = await userRepositoryInMemory.findUserByEmail(email);
    if (!user) {
      throw new AppError("User not found", 404);
    } else {
      if (user.password !== password) {
        throw new AppError("Email or password does not match", 401);
      }
    } 
       
    return res.status(200).json({ message: "User signed in" });
  }
}

export { SignInController }