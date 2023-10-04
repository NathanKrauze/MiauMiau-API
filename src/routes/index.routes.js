import { Router } from "express";
import usersRouter from "./users.routes.js";
import authRouter from "./auth.routes.js";
import catsRouter from "./cats.routes.js";

const router = Router();

router.use(usersRouter);
router.use(authRouter);
router.use(catsRouter);

export default router;