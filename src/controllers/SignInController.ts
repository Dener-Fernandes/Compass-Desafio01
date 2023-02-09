import { Request, Response } from "express";
import { UserRepositoryInMemory } from "./../models/repositories/UserRepositoryInMemory";

class SignInController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    if (!email ||!password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    
    const userRepositoryInMemory = UserRepositoryInMemory.getInstance();

    try {
      const user = await userRepositoryInMemory.findUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      } else {
        if (user.password !== password) {
          return res.status(401).json({ message: "Email or password does not match" });
        }
      }

      return res.status(200).json({ message: "User signed in" });
    }
     catch (error) {
      return res.status(500).json({ message: "Could not signIn. Please try later" }); 
    }
  }
}

export { SignInController }