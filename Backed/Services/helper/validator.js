const Joi = require('joi');

module.exports = {
    '/login': Joi.object({
        name: Joi.string().required()
    }),
    '/signup': Joi.object({
        name: Joi.string().required(),
    }),
    '/create/result' : Joi.object({
        name: Joi.string().required(),
        result: Joi.number().required()
    })
}