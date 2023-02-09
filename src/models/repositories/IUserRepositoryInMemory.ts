import { ISignUpDTO } from "../dtos/ISignUpDTO"
import { User } from "../entities/User"

interface IUserRepositoryInMemory {
  signUp(ISignUpDTO: ISignUpDTO): Promise<User>,
  findUserByEmail(email: string): Promise<User | undefined>
}

export { IUserRepositoryInMemory }