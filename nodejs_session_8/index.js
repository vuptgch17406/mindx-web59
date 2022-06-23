const express = require("express");
const app = express();
const { connectToDb, db } = require("./db");
const bodyParser = require("body-parser");
const userRouter = require("./router/user");
const uploadRouter = require("./router/upload");

app.use(bodyParser.json({ extended: true }));
app.use("/user", userRouter);
app.use("/upload", uploadRouter);

app.get("/", (req, res) => {
  res.json("Hello World");
  console.log("database", db);
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
  connectToDb();
});
