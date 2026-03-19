import "dotenv/config"
import express from "express"
import taskRoutes from "./routes/task.routes.js";
import connectDb from "./db/task.db.js";

const app = express()
const port = process.env.PORT || 7300;

app.use(express.json())

app.use("/tasks", taskRoutes)

connectDb()

app.listen(port , () => {
    console.log(`Server is listening on: http://localhost:${port}`);
})