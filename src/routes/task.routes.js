import express from "express";

const taskRoutes = express.Router();

taskRoutes.get("/", (req, res) => res.send("Get all tasks"));
taskRoutes.post("/", (req, res) => res.send("Task created"));
taskRoutes.get("/:id",  (req, res) => res.send(`specific task ${req.params.id}`));
taskRoutes.patch("/:id", (req, res) => res.send(`Updating task ${req.params.id}`));
taskRoutes.delete("/:id", (req, res) => res.send(`Deleting task ${req.params.id}`));

export default taskRoutes;