const mongoose = require('mongoose')

const Task = mongoose.model('Task', { // define task blueprint
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = Task