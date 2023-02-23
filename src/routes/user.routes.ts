import express from "express";

const userRoutes = express.Router();

import { SignInController } from "../controllers/SignInController";
import { SignUpController } from "../controllers/SignUpController";
import { validateSignInRequest } from "../validators/validateSignInRequest";
import { validateSignUpRequest } from "../validators/validateSignUpRequest";

const signUpController = new SignUpController();
const signInController = new SignInController();

userRoutes.post("/signUp", validateSignUpRequest, signUpController.handle);
userRoutes.post("/signIn", validateSignInRequest, signInController.handle);

export { userRoutes }