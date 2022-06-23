const express = require("express");
const { db } = require("../db");

const classesRouter = express.Router();

classesRouter.get("/", (req, res) => {});
classesRouter.get("/:id", (req, res) => {});
classesRouter.post("/", async (req, res) => {});
classesRouter.put("/:id", (req, res) => {});
classesRouter.delete("/:id", (req, res) => {});

module.exports = classesRouter;
