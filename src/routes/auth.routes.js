import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { signUpSchema } from "../schemas/users.schemas.js";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { signInSchema } from "../schemas/auth.schemas.js";

const authRouter = Router()

authRouter.post('/signup', validateSchema(signUpSchema), signUp);
authRouter.post('/signin', validateSchema(signInSchema), signIn);

export default authRouter;