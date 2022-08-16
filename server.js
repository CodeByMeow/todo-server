const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const todoRouter = require("./todo");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("/todos", todoRouter);

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
