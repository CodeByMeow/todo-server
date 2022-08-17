const express = require("express");
const todoRouter = express.Router();

const db = require("./db");

todoRouter.get("/", (_req, res) => res.json(db));
todoRouter.post("/add", (req, res) => {
   const todo = req.body;
   db.todos.push(todo);
   res.status(201).json("ok");
});

module.exports = todoRouter;
