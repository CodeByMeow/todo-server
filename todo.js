const express = require("express");
const todoRouter = express.Router();

const db = require("./db");

todoRouter.get("/", (_req, res) => res.json(db));

module.exports = todoRouter;
