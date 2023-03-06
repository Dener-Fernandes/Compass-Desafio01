import { Request, Response, NextFunction } from "express";
import Joi, { ValidationError } from "joi";

const requestValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});


async function validateSignInRequest (req: Request, res: Response, next: NextFunction): Promise<void | Response> {
  try {
    await requestValidation.validateAsync(req.body);
    
    return next();
  } catch (error) {
    const errorsValidation = error as ValidationError;

    return res.status(401).json({ message: errorsValidation.message });
  }
}

export { validateSignInRequest }