const express = require("express");
const app = express();
const { connectToDb, db } = require("./db");
const studentRouter = require("./router/student");
const classesRouter = require("./router/classes");

const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

app.use("/student", studentRouter);
app.use("/classes", classesRouter);

app.get("/", (req, res) => {
  res.json("Hello World");
  console.log("database", db);
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
  connectToDb();
});
