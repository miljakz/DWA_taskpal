const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    completeTask  // Include the new function
} = require('../controllers/taskController');

// Get all tasks
router.get('/', getAllTasks);

// Get a single task by ID
router.get('/:id', getTask);

// Create a new task
router.post('/', createTask);

// Update an existing task by ID
router.put('/:id', updateTask);

// Delete a task by ID
router.delete('/:id', deleteTask);

// Complete a task by ID
router.post('/:id/complete', completeTask);  // New route for completing a task

module.exports = router;
