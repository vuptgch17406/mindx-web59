// step1: Tao router cho teacher
// step2: Tao const dang Array luu 3 phan tu
// [
//   {
//     id: 1,
//     name: "Tuan",
//     job: "teacher",
//   },

//   {
//     id: 2,
//     name: "Minh",
//     job: "teacher",
//   },

//   {
//     id: 3,
//     name: "Vu",
//     job: "teacher",
//   },
// ];

// step3: tao method GET ==> return ve mang teacher
// tao method POST ==> them phan tu vao mang teacher
// PUT ==> update phan tu 2 ==> name: Khai, job: 'teacher-supporter'
// DELETE xoa phan tu cuoi cung trong mang teacher

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

teacherRouter.get("/", (req, res) => {
  res.json(teachers);
});

module.exports = teacherRouter;
