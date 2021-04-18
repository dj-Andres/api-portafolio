const express = require("express");
const router = express.Router();
const Contact = require("../controllers/contactController");

router.post("/", Contact.sendCorreo);

module.exports = router;
