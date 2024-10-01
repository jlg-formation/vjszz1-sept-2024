import express from "express";

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
    name: "Tondeuse",
    price: 5,
    qty: 12,
  },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

export default app;
