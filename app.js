const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then()
  .catch((err) => console.error("Mongo connection error:", err));

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[Backend Debug] Request received: ${req.method} ${req.url}`);
  next();
});

app.use("/", mainRouter);

app.listen(PORT);
