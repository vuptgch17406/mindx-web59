const express = require("express");
const studentRouting = express.Router();

const students = [
  {
    id: 1,
    name: "Tai",
    age: 14,
  },
  {
    id: 2,
    name: "Minh",
    age: 14,
  },
  {
    id: 3,
    name: "Nghia",
    age: 15,
  },
];

studentRouting.get("/", (req, res) => {
  console.log("this is request from client");
  res.json(students);
});

studentRouting.post("/", (req, res) => {
  res.json(students);
});
module.exports = studentRouting;
