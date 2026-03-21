import "dotenv/config"
import express from "express"
import taskRoutes from "./src/routes/task.routes.js";
import connectDb from "./src/db/task.db.js";
import authRoutes from "./src/routes/auth.routes.js";
import cors from "cors";


const app = express()
const port = process.env.PORT || 7300;

app.use(cors())
app.use(express.json())
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

connectDb()

app.listen(port , () => {
    console.log(`Server is listening on: http://localhost:${port}`);
})