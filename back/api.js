const express = require("express");

const app = express.Router();

const articles = [
  {
    id: "a1",
    name: "Tournevis",
    price: 3.99,
    qty: 345,
  },
  {
    id: "a2",
    name: "Pelle",
    price: 5,
    qty: 12,
  },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

module.exports = app;
