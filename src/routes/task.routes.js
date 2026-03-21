import express from "express";
import {getAllTasks, getTaskById, createTask, updateTaskById, deleteTaskById} from "../controllers/task.controller.js"
import protect from "../middlewares/auth.middlewares.js";

const taskRoutes = express.Router();

taskRoutes.get("/", protect, getAllTasks);
taskRoutes.post("/", protect, createTask);
taskRoutes.get("/:id", protect, getTaskById);
taskRoutes.patch("/:id", protect, updateTaskById);
taskRoutes.delete("/:id", protect, deleteTaskById);

export default taskRoutes;
