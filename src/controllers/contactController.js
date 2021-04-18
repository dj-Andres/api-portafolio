const Validations = require("../libs/validations");
const contactEmail = require("../libs/mailer");
const Contact = {};

Contact.sendCorreo = async (req, res) => {
  const { nombre, email, proyecto, mensaje } = req.body;

  const { error } = Validations.SchemaEmail.validate(req.body);

  try {
    if (error) {
      return res.status(404).json({
        success: 0,
        error: error.details[0].message,
      });
    } else {
      await contactEmail.sendMail(email, nombre, proyecto, mensaje);

      return res.status(200).json({
        success: 1,
        message: "Correo enviado Correctamente",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = Contact;
