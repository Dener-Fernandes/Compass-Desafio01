import { v4 as uuidV4 } from "uuid";

class User {
  public id: string;
  public firstName: string;
  public lastName: string;
  public birthDate: string;
  public city: string;
  public country: string;
  public email: string;
  public password: string;
  public confirmPassword: string;

  constructor(
    firstName: string, 
    lastName: string, 
    birthDate: string, 
    city: string, 
    country: string, 
    email: string, 
    password: string, 
    confirmPassword: string
    ) {
    this.id = "";
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.city = city;
    this.country = country;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
      
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }