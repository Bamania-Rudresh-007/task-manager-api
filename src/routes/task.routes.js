import express from "express";
import {getAllTasks, getTaskById, createTask, updateTaskById, deleteTaskById} from "../controllers/task.controller.js"
const taskRoutes = express.Router();

taskRoutes.get("/", getAllTasks);
taskRoutes.post("/", createTask);	
taskRoutes.get("/:id", getTaskById);
taskRoutes.patch("/:id", updateTaskById);
taskRoutes.delete("/:id", deleteTaskById);

export default taskRoutes;

