import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { signUpSchema } from "../schemas/users. schemas.js";
import { SignUp } from "../controllers/auth.controllers.js";

const authRouter = Router()

authRouter.post('/signup', validateSchema(signUpSchema), SignUp);

export default authRouter;