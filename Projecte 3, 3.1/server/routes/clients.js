const express = require("express");

const bcrypt = require("bcryptjs");

const Client = require("../models/client");

const { verificaToken, verificaAdminRole } = require("../middlewares/auth");

const app = express();

app.get("/client", (req, res) => {
  Client.find({}, "name lastname username email DNI phone").exec(
    (err, clients) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        clients,
      });
    }
  );
});

app.put("/client", (req, res) => {
  let body = req.body;
  let client = new Client({
    username: body.username,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    DNI: body.DNI,
    phone: body.phone,
    name: body.name,
    lastname: body.lastname,
  });

  //   if (!bcrypt.compareSync(body.password, "asdf")) {
  //     console.log("el password és ASDF");
  //   }

  client.save((err, clientDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      client: clientDB,
    });
  });
});

app.delete("/client", (req, res) => {
  Client.deleteOne({ _id: req.body.id }, (err) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
    });
  });
});

module.exports = app;
