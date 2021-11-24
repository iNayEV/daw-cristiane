const { urlencoded } = require("express");

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use(require("./routes/carta"));
// server
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
