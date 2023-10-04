import Joi from "joi";

export const catSchema = Joi.object({
    name: Joi.string().required(),
    photo: Joi.string().uri().required(),
    characteristics: Joi.string().required()
})