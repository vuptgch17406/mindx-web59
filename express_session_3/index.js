const express = require("express");
const app = express();
const studentRouter = require("./router/students");
const LoggingMiddleware = require("./middleware/logging_middleware");
const studentMiddleware = require("./middleware/student_middleware");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("combined"));
app.use(bodyParser.json({ extended: true }));
app.use("/student", LoggingMiddleware, studentMiddleware, studentRouter);

app.get("/teacher", LoggingMiddleware, (req, res) => {
  res.json("Success");
});

app.get("/class", LoggingMiddleware, (req, res) => {
  res.json("Success");
});

app.use(express.static("assests"));
app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("Application listening on");
});
