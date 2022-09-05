"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// person route that will receive a persons name, age, gender.
app.post("/person", (req, res) => {
  const { person } = req.body;
  console.log(person);
  res.status(200).send(`${parseInt(person.age) + 5}`);
});

/* istanbul ignore next */ 
function start(port) {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}

module.exports = {
    start: start, 
    app: app };
