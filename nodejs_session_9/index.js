const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { connectToDb, db } = require("./db");

app.use(bodyParser.json({ extended: true }));

app.get("/", async (req, res) => {
  const student = await db.students.findOne({
    name: "Nghia",
  });

  res.status(200);
  res.json(student);
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
  connectToDb();
});
