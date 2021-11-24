const express = require("express");

const bcrypt = require("bcryptjs");

const Servei = require("../models/servei");

const { verificaToken, verificaAdminRole } = require("../middlewares/auth");

const app = express();

app.get("/servei", (req, res) => {
  Servei.find({}, "name desc assis shipping payMode").exec((err, serveis) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      serveis,
    });
  });
});

app.put("/servei", (req, res) => {
  let body = req.body;
  let servei = new Servei({
    name: body.name,
    desc: body.desc,
    assis: body.assis,
    shipping: body.shipping,
    payMode: body.payMode,
  });

  //   if (!bcrypt.compareSync(body.password, "asdf")) {
  //     console.log("el password és ASDF");
  //   }

  servei.save((err, serveiDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      servei: serveiDB,
    });
  });
});

module.exports = app;
