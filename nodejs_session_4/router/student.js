const express = require("express");
const studentRouter = express.Router();
const Student = require("../constants/Student");

studentRouter.get("/", (req, res) => {
  res.json(Student);
});

studentRouter.put("/", (req, res) => {
  if (req.userRole !== "teacher") {
    res.json("Unauthorized");
    res.json(401);
    return;
  }
  const messageBody = req.body;
  const index = Student.findIndex((el) => {
    return messageBody.id === el.id;
  });
  Student[index].grade = req.body.grade;
  res.json(Student);
});

module.exports = studentRouter;
