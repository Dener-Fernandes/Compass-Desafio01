import { Request, Response } from "express";
import { UserRepositoryInMemory } from "./../models/repositories/UserRepositoryInMemory";

class SignUpController {
  async handle(req: Request, res: Response) {
    const {   
      firstName, 
      lastName, 
      birthDate, 
      city, 
      country, 
      email, 
      password, 
      confirmPassword 
    } = req.body;
   
    if (!firstName || !lastName || !birthDate || !city || !country || !email || !city || !password || !confirmPassword) {
      return res.status(400).json({ message: "Missing required fields" });
    } else {
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }
    }

    const userRepositoryInMemory = UserRepositoryInMemory.getInstance();

    try {

      const userAlreadyExists = await userRepositoryInMemory.findUserByEmail(email);

      if (userAlreadyExists) {
        return res.status(401).json({ message: "User already exists" });
      }

      const user = await userRepositoryInMemory.signUp({ firstName, lastName, birthDate, city, country, email, password, confirmPassword });
      
      return res.status(201).json({ user: user });

    } catch (error) {
      return res.status(500).json({ message: "Could not signup. Please, try later" });
    }
  }
}

export { SignUpController }