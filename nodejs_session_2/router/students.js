const express = require("express");
const studentRouter = express.Router();
const bodyParser = require("body-parser");

const students = [
  {
    id: 1,
    name: "Vu",
  },
  {
    id: 2,
    name: "Anh",
  },
  {
    id: 3,
    name: "Pham",
  },
];

studentRouter.get("/", (req, res) => {
  console.log("req: ", req.query.id);
  res.json(students);
});
studentRouter.post("/", (req, res) => {
  const { id, name } = req.body;
  students.push({
    id,
    name,
  });
  console.log("This is request body: ", req.body);
  res.status(201);
  res.json(students);
});
studentRouter.put("/:id", (req, res) => {
  students[req.params.id].name = "Jack5tr";
  // students[req.params.id].name = req.query.name;
  res.json(students);
});
studentRouter.delete("/:id", (req, res) => {
  students.splice(req.params.id, 1);
  res.json(students);
  res.send("Hello");
});

module.exports = studentRouter;

// GET params ===> truyền vào trong router ("/:id")
// GET query ===> truyền vào trong router ("?key=value")
