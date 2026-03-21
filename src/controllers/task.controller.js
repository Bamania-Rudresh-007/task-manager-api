import Task from "../models/task.model.js";

const getAllTasks = async (req, res) => {
    try {
        
        const {status} = req.query;

        const filter = {
            user: req.user.userId,
        }

        if(status){
            filter.status = status;
        }
        
        const allTasks = await Task.find(filter);

        res.json({
            message: "fetched all tasks",
            data: allTasks,
        });
    } catch (error) {
        res.status().jsoh({
            message: "Failed fetching all Tasks",
            error: error.message,
        });
    }
};

const getTaskById = async (req, res) => {
    try {
        const allTasks = await Task.findById({
            _id: req.params.id,
            user: req.user.userId.id,
        });

        res.json({
            message: "fetched all tasks",
            data: allTasks,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed fetching all Tasks",
            error: error.message,
        });
    }
};

const createTask = async (req, res) => {
    try {
        console.log(req.body);
        const newTask = await Task.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            user: req.user.userId,
        });

        res.json({
            message: "Task created successfully",
            data: newTask,
        });
    } catch (error) {
        res.status(500).json({
            message: "failed creating Task",
            error: error.message,
        });
    }
};

const updateTaskById = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            { _id: req.params.id, user: req.user.userId },
            req.body,
            { returnDocument: "after", runValidators: true },
        );

        res.json({
            message: "Task updated successfully",
            data: updatedTask,
        });
    } catch (error) {
        res.status(500).json({
            message: "failed updating Task",
            error: error.message,
        });
    }
};

const deleteTaskById = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete({
            _id: req.params.id,
            user: req.user.userId,
        });

        res.json({
            message: "Task deleted successfully",
            data: deletedTask,
        });
    } catch (error) {
        res.status(500).json({
            message: "failed deleting  Task",
            error: error.message,
        });
    }
};

export { getAllTasks, getTaskById, createTask, updateTaskById, deleteTaskById };
