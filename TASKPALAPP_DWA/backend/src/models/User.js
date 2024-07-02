const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0  // Initialize points for new users
  },
  badges: [{
    badgeName: String,
    dateEarned: Date
  }]
});

module.exports = mongoose.model('User', userSchema);
