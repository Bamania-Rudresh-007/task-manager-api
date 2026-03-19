import "dotenv/config"
import express from "express"
import taskRoutes from "./src/routes/task.routes.js";
import connectDb from "./src/db/task.db.js";
import authRoutes from "./src/routes/auth.routes.js";

const app = express()
const port = process.env.PORT || 7300;

app.use(express.json())

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

connectDb()

app.listen(port , () => {
    console.log(`Server is listening on: http://localhost:${port}`);
})