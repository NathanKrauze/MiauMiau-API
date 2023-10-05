import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { availableSchema, catSchema } from "../schemas/cats.schemas.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import { getCatById, getCats, postCats, updateCatDisponibility } from "../controllers/cats.controllers.js";

const catsRouter = Router();

catsRouter.post("/cats", validateSchema(catSchema), validateAuth, postCats);
catsRouter.get('/cats', validateAuth, getCats);
catsRouter.get('/cats/:id', validateAuth, getCatById);
catsRouter.put('/cats/:id', validateSchema(availableSchema), validateAuth, updateCatDisponibility);

export default catsRouter;