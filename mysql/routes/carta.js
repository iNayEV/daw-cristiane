const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const { connection } = require("../config.db");

const getCarta = (request, response) => {
  connection.query("SELECT * FROM carta", (error, results) => {
    if (error) throw error;
    response.status(200).json(results);
  });
  // Connexió amb la base de dades
};

const postCarta = (request, response) => {
  const { plato, description, precio, disponible } = request.body;
  console.log({ plato, description });
  // insertar a la bbdd
  connection.query(
    "INSERT INTO CARTA(plato, description, precio, disponible) VALUES (?,?,?,?) ",
    { plato, description, precio, disponible },
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Item afegit correctament": results.affectedRows });
    }
  );
};

const delCarta = (request, response) => {
  const id = request.params.id;
  connection.query("Delete from carta where id = ?", [id], (error, results) => {
    if (error) throw error;
    response.status(201).json({ "Item eliminat": results.affectedRows });
  });
};

app.route("/carta").get((request, response) => {
  response.status(200).json();
});

app.use(function (req, res) {
  res.status(404).json();
});

module.exports = app;
