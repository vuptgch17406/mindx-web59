const express = require("express");
const teacherRouting = express.Router();

const teachers = [
  {
    id: 1,
    name: "Dung",
    age: 30,
  },
  {
    id: 2,
    name: "Dai",
    age: 29,
  },
  {
    id: 3,
    name: "Quan",
    age: 25,
  },
];

teacherRouting.get("/", (req, res) => {
  console.log("this is request from client");
  res.json(teachers);
});

teacherRouting.post("/", (req, res) => {
  res.json(teachers);
});
module.exports = teacherRouting;
