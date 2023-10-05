import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.js";
import { getUsersCats } from "../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.get('/users/cats', validateAuth, getUsersCats);

export default usersRouter;