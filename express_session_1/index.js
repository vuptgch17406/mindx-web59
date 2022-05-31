const express = require("express");
const app = express();

const port = 3000;

app.put("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Application listening on ${port}`);
});
