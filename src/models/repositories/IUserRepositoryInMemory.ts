import { ISignUpDTO } from "../dtos/ISignUpDTO"
import { HydratedDocument } from 'mongoose';

interface IUser extends ISignUpDTO {};

interface IUserRepositoryInMemory {
  signUp(ISignUpDTO: ISignUpDTO): Promise<HydratedDocument<IUser>>,
  findUserByEmail(email: string): Promise<HydratedDocument<IUser> | null>
}

export { IUserRepositoryInMemory }