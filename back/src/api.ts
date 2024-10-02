import express, { json } from "express";
import crypto from "node:crypto";

const app = express.Router();

let articles = [
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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", json(), (req, res) => {
  const newArticle = req.body;
  console.log("newArticle: ", newArticle);
  const article = { ...newArticle, id: crypto.randomUUID() };
  articles.push(article);
  res.status(204).end();
});

app.delete("/articles", json(), (req, res) => {
  const ids: string[] = req.body;
  console.log("ids: ", ids);
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

export default app;
