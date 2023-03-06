import { HydratedDocument } from "mongoose";
import { ISignUpDTO } from "./../dtos/ISignUpDTO";
import { User } from "./../entities/User";
import { IUserRepositoryInMemory } from "./IUserRepositoryInMemory";

interface IUser extends ISignUpDTO {};

class UserRepositoryInMemory implements IUserRepositoryInMemory {
  private static INSTANCE: UserRepositoryInMemory;

  static getInstance() {
    if (!UserRepositoryInMemory.INSTANCE) {
      UserRepositoryInMemory.INSTANCE = new UserRepositoryInMemory();
    }

    return UserRepositoryInMemory.INSTANCE;
  }

  async signUp({ 
    firstName, 
    lastName, 
    birthDate, 
    city, 
    country, 
    email, 
    password, 
    confirmPassword
  }: ISignUpDTO): Promise<HydratedDocument<IUser>> {
    const user: HydratedDocument<IUser> = await User.create({
      firstName, 
      lastName, 
      birthDate, 
      city, 
      country, 
      email, 
      password, 
      confirmPassword
    });
    
    return user;
  }

  async findUserByEmail(email: string): Promise<HydratedDocument<IUser> | null> {
    const user = await User.findOne({ email: email });

    return user;
  }
}

export { UserRepositoryInMemory }