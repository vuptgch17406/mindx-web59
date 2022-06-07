const express = require("express");
const subjectRouting = express.Router();

const subjects = [
  {
    id: 1,
    name: "Toan",
  },
  {
    id: 2,
    name: "Van",
  },
  {
    id: 3,
    name: "Anh",
  },
];

subjectRouting.get("/", (req, res) => {
  console.log("this is request from client");
  res.json(subjects);
});

subjectRouting.post("/", (req, res) => {
  res.json(subjects);
});
module.exports = subjectRouting;
