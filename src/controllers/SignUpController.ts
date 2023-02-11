import { Request, Response } from "express";
import { UserRepositoryInMemory } from "./../models/repositories/UserRepositoryInMemory";

interface IRequest {
  firstName: string; 
  lastName: string; 
  birthDate: string; 
  city: string; 
  country: string; 
  email: string; 
  password: string; 
  confirmPassword: string; 
}

class SignUpController {
  async handle(req: Request, res: Response) {
    const requestValues: IRequest = req.body;
    const userRepositoryInMemory = UserRepositoryInMemory.getInstance();

    try {
      const userAlreadyExists = await userRepositoryInMemory.findUserByEmail(requestValues.email);

      if (userAlreadyExists) {
        return res.status(401).json({ message: "User already exists" });
      }

      const user = await userRepositoryInMemory.signUp(requestValues);
      
      return res.status(201).json({ user: user });

    } catch (error) {
      return res.status(500).json({ message: "Could not signup. Please, try later" });
    }
  }
}

export { SignUpController }