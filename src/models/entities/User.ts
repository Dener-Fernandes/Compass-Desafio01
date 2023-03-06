import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";
import { ISignUpDTO as IUser } from "../dtos/ISignUpDTO";

const userSchema = new Schema<IUser>( {
  firstName: { 
    type: String, 
    required: [true, "A name is required"], 
  },
  lastName: {
    type: String, 
    required: [true, "A last name is required"], 
  },
  birthDate: {
    type: Date,
    required: [true, "A birthDate is required"],
  },
  city: {
    type: String,
    required: [true, "A city is required"],
  },
  country: {
    type: String,
    required: [true, "A country is required"],
  },
  email: {
    type: String,
    required: [true, "An email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A password is required"],
  },
  confirmPassword: {
    type: String, undefined,
    required: [true, "Confirm your password"],
    validate: {
      validator: function(this: IUser, el: string): boolean {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  }
});

// It can't use arrow function here because it is not supported by mongoose
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcryptjs.hash(this.password, 12);

  // This will make sure that confirmPassword will not be saved in database
  this.confirmPassword = undefined;
  
  next();
});

const User = model<IUser>("User", userSchema);

export { User }