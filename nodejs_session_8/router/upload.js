const express = require("express");
const multer = require("multer");
const uploadRouter = express.Router();

// define place to store file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let fileType = "";
    if (file.mimetype === "image/jpeg") {
      fileType = ".jpeg";
    }
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + fileType);
  },
});

const upload = multer({ storage: storage });
// maxCount ==> maximum file to upload
const cpUpload = upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "gallery", maxCount: 8 },
]);

uploadRouter.post("/", cpUpload, async (req, res) => {
  res.status(201);
  res.json("File uploaded");
});

module.exports = uploadRouter;
