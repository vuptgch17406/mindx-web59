const express = require("express");
const teacherRouter = express.Router();

const teachers = [
  {
    id: 1,
    name: "Tuan",
    job: "teacher",
  },

  {
    id: 2,
    name: "Minh",
    job: "teacher",
  },

  {
    id: 3,
    name: "Vu",
    job: "teacher",
  },
];

// method GET
teacherRouter.get("/", (req, res) => {
  res.json(teachers);
});
// method POST
teacherRouter.post("/", (req, res) => {
  let { id, name, job } = req.body;
  // if (!name) {
  //   name = "default name";
  // }
  teachers.push({
    id,
    name,
    job,
  });
  res.status(201);
  res.json(teachers);
});
// method PUT
teacherRouter.put("/:id", (req, res) => {
  teachers[req.params.id].name = "Khai";
  teachers[req.params.id].job = "teacher-supporter";

  res.json(teachers);
});
// method DELETE
teacherRouter.delete("/:id", (req, res) => {
  // push: them 1 phan tu vao cuoi array
  // pop: lay ra phan tu cuoi array
  teachers.splice(req.params.id, 1);
  res.json(teachers);
  res.send("Hello");
});

module.exports = teacherRouter;
