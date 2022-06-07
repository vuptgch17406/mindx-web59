const express = require("express");
const app = express();
const studentRouting = require("./router/student_routing");
const teacherRouting = require("./router/teacher_routing");
const subjectRouting = require("./router/subject_routing");
const LoggingMiddleware = require("./middleware/logging_middleware");
const studentMiddleware = require("./middleware/student_middleware");
const bodyParser = require("body-parser");
// const morgan = require("morgan");

// app.use(morgan("combined"));
app.use(bodyParser.json({ extended: true }));
app.use("/student", LoggingMiddleware, studentRouting);
app.use("/teacher", LoggingMiddleware, teacherRouting);
app.use("/subject", LoggingMiddleware, subjectRouting);

// app.get("/teacher", LoggingMiddleware, (req, res) => {
//   res.json("Success");
// });

// app.get("/class", LoggingMiddleware, (req, res) => {
//   res.json("Success");
// });

// app.use(express.static("assests"));
app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("Application listening on");
});
