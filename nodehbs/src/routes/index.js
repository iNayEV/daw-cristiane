const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // anire a la BBDD, agafaré el que m'interessi,
  // crearé un objecte... i el passaré al render

  res.render("index", {
    txt: "lorem ipsum sit amet HOME",
    title: "Home",
    active: { Home: true },
  });
});

router.get("/contacte", (req, res) => {
  res.render("contacte", {
    txt: "lorem ipsum sit amet CONTACTE",
    title: "Contacte",
    active: { Contacte: true },
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    txt: "lorem ipsum sit amet Login",
    title: "Login",
    active: { Login: true },
  });
});

module.exports = router;
