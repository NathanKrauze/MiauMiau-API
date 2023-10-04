import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { signUpSchema } from "../schemas/users. schemas.js";

const usersRouter = Router()

export default usersRouter;