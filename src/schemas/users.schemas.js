import Joi from 'joi';

export const signUpSchema = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
    phone: Joi.string().min(10).min(11).pattern(/^[0-9]+$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required().equal(Joi.ref('password'))
})