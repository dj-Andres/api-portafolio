const express = require("express");
const Contact = require('./routes/contact.routes');
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const app = express();


app.use(morgan("dev"));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: 1,
    message: "Welcome a my Api",
  });
});

app.use("/contact",Contact);

app.use((req, res) => {
  res.status(404).json({
    message: "Pagina no encontrada",
  });
});

module.exports = app;
