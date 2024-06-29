const Task = require('../models/Task');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('category');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single task by ID
exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('category');
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            dueDate: req.body.dueDate
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing task by ID
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.category = req.body.category || task.category;
        task.dueDate = req.body.dueDate || task.dueDate;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.remove();
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
