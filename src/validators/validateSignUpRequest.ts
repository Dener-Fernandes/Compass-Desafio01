import { Request, Response, NextFunction } from "express";
import Joi, { ValidationError } from "joi";

const requestValidation = Joi.object({
  firstName: Joi.string().required(), 
  lastName: Joi.string().required(),
  birthDate: Joi.required(), 
  city: Joi.string().required(), 
  country: Joi.string().required(), 
  email: Joi.string().email().required(), 
  password: Joi.string().required(), 
  confirmPassword: Joi.string().valid(Joi.ref("password")).required() 
});

async function validateSignUpRequest(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
  try {
    await requestValidation.validateAsync(req.body);

    return next();
  } catch (error) {
    const errorsValidation = error as ValidationError;
    
    return res.status(400).json( {message: errorsValidation.message });
  }
}

export { validateSignUpRequest }