import { Router } from "express";
import usersRouter from "./users.routes.js";
import authRouter from "./auth.routes.js";

const router = Router();

router.use(usersRouter);
router.use(authRouter);

export default router;