import { ISignUpDTO } from "./../dtos/ISignUpDTO";
import { User } from "./../entities/User";
import { IUserRepositoryInMemory } from "./IUserRepositoryInMemory";

class UserRepositoryInMemory implements IUserRepositoryInMemory {
  private static INSTANCE: UserRepositoryInMemory;
  private users: User[] = [];

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
  }: ISignUpDTO): Promise<User> {
    const user = new User(
      firstName, 
      lastName, 
      birthDate, 
      city, 
      country, 
      email, 
      password, 
      confirmPassword
    );
    
    await this.users.push(user);

    return user;
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.users.find((user) => user.email === email);

    return user;
  }
}

export { UserRepositoryInMemory }