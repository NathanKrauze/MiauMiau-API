import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { catSchema } from "../schemas/cats.schemas.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import { getCatById, getCats, postCats, updateCatDisponibility } from "../controllers/cats.controllers.js";

const catsRouter = Router();

catsRouter.post("/cats", validateSchema(catSchema), validateAuth, postCats);
catsRouter.get('/cats', getCats);
catsRouter.get('/cats/:id', getCatById);
catsRouter.put('/cats/:id', updateCatDisponibility);

export default catsRouter;