const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required']
    },
    dueDate: {
        type: Date
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);
