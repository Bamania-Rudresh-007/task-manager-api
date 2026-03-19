import express from "express";
import { signUp, login } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signUp);
authRoutes.post("/login", login);


export default authRoutes;