const Joi = require("@hapi/joi");

const SchemaEmail = Joi.object({
  nombre: Joi.string().min(5).max(25).required(),
  email: Joi.string()
    .min(5)
    .max(50)
    .required()
    .email({
      minDomainSegments: 2,
      tlds: {
        allow: ["com", "net"],
      },
    }),
  proyecto: Joi.string().required(),
  mensaje: Joi.string().required(),
});

module.exports = {
  SchemaEmail,
};
