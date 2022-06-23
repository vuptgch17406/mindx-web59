const express = require("express");
const { ObjectId } = require("mongodb");
const studentRouter = express.Router();
const { db } = require("../db");

studentRouter.post("/", async (req, res) => {
  const { name, rank } = req.body;

  const respond = await db.students.insertOne({
    name,
    rank,
  });
  res.status(201);
  res.json(respond);
});

studentRouter.post("/add-many", async (req, res) => {
  try {
    const respond = await db.students.insertMany(req.body.data);
    res.status(201);
    res.json(respond);
  } catch (error) {
    res.status(500);
    res.json("Some thing went wrong");
  }
});

studentRouter.get("/", async (req, res) => {
  try {
    const { id, name, rank } = req.headers;
    let student;
    if (id) {
      student = await db.students.findOne({
        _id: new ObjectId(id),
      });
    } else if (name) {
      student = await db.students
        .find({
          name,
        })
        .toArray();
    } else if (rank) {
      student = await db.students
        .find({
          // Convert string rank to type number
          rank: +rank,
        })
        .toArray();
    } else {
      // student = await db.students
      //   .find({})
      //   .skip(19)
      //   .limit(5)
      //   .project({
      //     lastModified: 0,
      //     // _id: 0,
      //   })
      //   .toArray();
      student = await db.students
        .aggregate([
          { $match: $filter },
          {
            $sort: {
              rank: 1,
            },
          },
          {
            $skip: Number(req.query.skip),
          },
          {
            $limit: Number(req.query.limit),
          },
          {
            $project: {
              lastModified: 0,
              _id: 0,
            },
          },
        ])
        .toArray();
    }
    res.status(201);
    res.json(student);
  } catch (error) {
    res.status(500);
    res.json("Some thing went wrong");
  }
});

studentRouter.put("/", async (req, res) => {
  try {
    const id = req.headers.id;
    const body = req.body;
    const filter = {
      _id: new ObjectId(id),
    };
    const updateDoc = {
      $set: body,
    };

    const student = await db.students.updateOne(filter, updateDoc);
    res.status(201);
    res.json(student);
  } catch (error) {
    res.status(500);
    res.json("Some thing went wrong");
  }
});

studentRouter.delete("/", async (req, res) => {
  try {
    const { id } = req.headers;
    let respond;
    if (id) {
      respond = await db.students.deleteOne({ _id: new ObjectId(id) });
      if (respond.acknowledged) {
        res.json(`Successfully delete ${respond.deletedCount}`);
        return;
      }
      res.json(respond);
      return;
    } else {
      res.status(400);
      res.json("Id is missing");
      return;
    }
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
});

module.exports = studentRouter;
